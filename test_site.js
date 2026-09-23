/**
 * Полное тестирование сайта GramOS на локальном Nginx (порт 8080)
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:8080';

const PAGES_TO_TEST = [
  '/',
  '/pricing/',
  '/product/',
  '/product/crm/',
  '/product/automations/',
  '/product/payments/',
  '/product/broadcasts/',
  '/product/web-widget/',
  '/product/customer-cabinet/',
  '/product/mini-app/',
  '/solutions/',
  '/solutions/paid-community/',
  '/solutions/online-school/',
  '/solutions/expert/',
  '/solutions/agency/',
  '/solutions/site-to-telegram/',
  '/integrations/',
  '/docs/',
  '/docs/connect-bot/',
  '/docs/first-scenario/',
  '/docs/payments-setup/',
  '/docs/create-product/',
  '/docs/access/',
  '/docs/broadcasts/',
  '/docs/widget/',
  '/docs/mini-app/',
  '/docs/projects-roles/',
  '/docs/security-checklist/',
  '/demo/',
  '/roadmap/',
  '/releases/',
  '/security/',
  '/blog/',
  '/blog/telegram-funnel/',
  '/blog/monetize-channel/',
  '/blog/site-plus-telegram/',
  '/blog/support-to-crm/',
  '/blog/segments/',
  '/contact/',
  '/login/',
  '/legal/privacy/',
  '/legal/terms/',
  '/sitemap.xml',
  '/robots.txt',
  '/css/base.css',
  '/css/components.css',
  '/js/main.js'
];

function fetchUrl(urlPath) {
  return new Promise((resolve, reject) => {
    http.get(BASE_URL + urlPath, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        resolve({
          path: urlPath,
          statusCode: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    }).on('error', err => reject(err));
  });
}

async function runTests() {
  console.log('🧪 Запуск всестороннего тестирования GramOS на', BASE_URL);
  let failed = 0;
  let passed = 0;

  // 1. Тестирование доступности всех страниц и ресурсов
  console.log('\n--- [1/5] Проверка доступности страниц и ассетов ---');
  for (const p of PAGES_TO_TEST) {
    try {
      const res = await fetchUrl(p);
      if (res.statusCode === 200) {
        passed++;
      } else {
        console.error(`❌ Ошибка на ${p}: статус ${res.statusCode}`);
        failed++;
      }
    } catch (e) {
      console.error(`❌ Сбой запроса на ${p}:`, e.message);
      failed++;
    }
  }
  console.log(`Страниц и ресурсов проверено: ${PAGES_TO_TEST.length}, Успешно: ${passed}`);

  // 2. Тестирование 404 страницы
  console.log('\n--- [2/5] Проверка обработки несуществующих маршрутов (404) ---');
  try {
    const res404 = await fetchUrl('/non-existent-page-xyz/');
    if (res404.statusCode === 404 && res404.body.includes('Страница не найдена')) {
      console.log('✅ Кастомная страница 404 отдается с кодом 404 и фирменным шаблоном');
      passed++;
    } else {
      console.error(`❌ Неверная 404: статус ${res404.statusCode}`);
      failed++;
    }
  } catch (e) {
    console.error('❌ Ошибка проверки 404:', e.message);
    failed++;
  }

  // 3. Тестирование заголовков безопасности Nginx
  console.log('\n--- [3/5] Проверка заголовков безопасности Nginx ---');
  try {
    const home = await fetchUrl('/');
    const h = home.headers;
    const checks = [
      ['X-Frame-Options', h['x-frame-options'] === 'SAMEORIGIN'],
      ['X-Content-Type-Options', h['x-content-type-options'] === 'nosniff'],
      ['Referrer-Policy', !!h['referrer-policy']],
      ['Content-Security-Policy', !!h['content-security-policy']]
    ];
    checks.forEach(([name, ok]) => {
      if (ok) {
        console.log(`✅ Заголовок ${name}: ${h[name.toLowerCase()]}`);
        passed++;
      } else {
        console.warn(`⚠️ Отсутствует заголовок ${name}`);
      }
    });
  } catch (e) {
    console.error('❌ Ошибка проверки заголовков:', e.message);
    failed++;
  }

  // 4. Тестирование навигации и ссылок на главной странице
  console.log('\n--- [4/5] Аудит ссылок и элементов меню ---');
  try {
    const home = await fetchUrl('/');
    const html = home.body;

    // Проверка наличия ключевых ID и классов
    const requiredElements = [
      'id="navLinks"',
      'class="has-menu"',
      'class="menu menu-grid"',
      'class="menu menu-right"',
      'id="themeBtn"',
      'id="burger"',
      'id="drawer"',
      'id="drawerBackdrop"',
      'class="drawer-nav"',
      'drawer-link'
    ];

    requiredElements.forEach(elem => {
      if (html.includes(elem)) {
        console.log(`✅ Найдена структура: ${elem}`);
        passed++;
      } else {
        console.error(`❌ Отсутствует элемент: ${elem}`);
        failed++;
      }
    });

    // Извлечение всех href из меню
    const hrefMatches = html.match(/href="([^"]+)"/g) || [];
    const internalLinks = [...new Set(hrefMatches
      .map(m => m.replace(/href="|"/g, ''))
      .filter(l => l.startsWith('/') && !l.startsWith('//'))
    )];

    console.log(`Найдено ${internalLinks.length} уникальных внутренних ссылок. Проверяем их целостность...`);
    let broken = 0;
    for (const link of internalLinks) {
      const res = await fetchUrl(link);
      if (res.statusCode !== 200) {
        console.error(`❌ Битая ссылка в навигации: ${link} -> ${res.statusCode}`);
        broken++;
        failed++;
      }
    }
    if (broken === 0) {
      console.log(`✅ Все ${internalLinks.length} ссылок в меню и футере возвращают статус 200 OK! Битая навигация отсутствует.`);
      passed++;
    }
  } catch (e) {
    console.error('❌ Ошибка аудита навигации:', e.message);
    failed++;
  }

  // 5. Тестирование Schema.org JSON-LD
  console.log('\n--- [5/5] Валидация микроразметки Schema.org ---');
  try {
    const home = await fetchUrl('/');
    const jsonLdMatches = home.body.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) || [];
    console.log(`Найдено блоков JSON-LD: ${jsonLdMatches.length}`);
    let validJsonCount = 0;
    for (const match of jsonLdMatches) {
      const raw = match.replace(/<script type="application\/ld\+json">|<\/script>/g, '').trim();
      const parsed = JSON.parse(raw);
      if (parsed['@context'] === 'https://schema.org') {
        validJsonCount++;
      }
    }
    if (validJsonCount === jsonLdMatches.length && validJsonCount > 0) {
      console.log(`✅ Все ${validJsonCount} блоков Schema.org валидны и содержат корректный @context.`);
      passed++;
    } else {
      console.error('❌ Ошибка в блоках Schema.org');
      failed++;
    }
  } catch (e) {
    console.error('❌ Ошибка JSON-LD:', e.message);
    failed++;
  }

  console.log('\n=============================================');
  console.log(`ИТОГИ ТЕСТИРОВАНИЯ: Успешно: ${passed}, Ошибок: ${failed}`);
  console.log('=============================================\n');

  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
