/**
 * GramOS — Static Site Generator & SEO Compiler
 * Pure Node.js build system: generates pre-rendered static HTML, sitemap.xml, robots.txt and assets.
 */
const fs = require('fs');
const path = require('path');

// Load Data
const siteConfig = require('./src/data/site');
const { PRODUCTS } = require('./src/data/products');
const { SOLUTIONS } = require('./src/data/solutions');
const { DOCS } = require('./src/data/docs');
const { POSTS } = require('./src/data/blog');
const { HOME_FAQS } = require('./src/data/faqs');

// Load Layout & Page Templates
const { renderLayout } = require('./src/templates/layout');
const { renderHome } = require('./src/templates/pages/home');
const { renderProductOverview } = require('./src/templates/pages/productOverview');
const { renderProductPage } = require('./src/templates/pages/productPage');
const { renderSolutionsIndex } = require('./src/templates/pages/solutionsIndex');
const { renderSolutionPage } = require('./src/templates/pages/solutionPage');
const { renderPricingPage } = require('./src/templates/pages/pricingPage');
const { renderDemoPage } = require('./src/templates/pages/demoPage');
const { renderIntegrationsPage } = require('./src/templates/pages/integrationsPage');
const { renderRoadmapPage } = require('./src/templates/pages/roadmapPage');
const { renderSecurityPage } = require('./src/templates/pages/securityPage');
const { renderDocsIndex } = require('./src/templates/pages/docsIndex');
const { renderDocPage } = require('./src/templates/pages/docPage');
const { renderBlogIndex } = require('./src/templates/pages/blogIndex');
const { renderPostPage } = require('./src/templates/pages/postPage');
const { renderContactPage } = require('./src/templates/pages/contactPage');
const { renderLoginPage } = require('./src/templates/pages/loginPage');
const { renderLegalPage } = require('./src/templates/pages/legalPage');
const { render404Page } = require('./src/templates/pages/404Page');

const DIST_DIR = path.join(__dirname, 'dist');

// Helper to ensure directory exists
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Helper to write file
function writePage(subPath, htmlContent) {
  let targetFile;
  if (subPath === '/404.html') {
    targetFile = path.join(DIST_DIR, '404.html');
  } else if (subPath === '/') {
    targetFile = path.join(DIST_DIR, 'index.html');
  } else {
    const cleanSub = subPath.replace(/^\/|\/$/g, '');
    const dir = path.join(DIST_DIR, cleanSub);
    ensureDir(dir);
    targetFile = path.join(dir, 'index.html');
  }
  fs.writeFileSync(targetFile, htmlContent, 'utf-8');
}

// Copy directory recursively
function copyDir(src, dest) {
  ensureDir(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function build() {
  console.log('🚀 Starting GramOS Production SSG Build...');
  const startTime = Date.now();

  // Clean / Create dist directory
  if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true, force: true });
  }
  ensureDir(DIST_DIR);

  const pages = [];

  // 1. Home Page
  pages.push({
    path: '/',
    priority: '1.0',
    changefreq: 'daily',
    metaTitle: siteConfig.defaultTitle,
    metaDesc: siteConfig.defaultDesc,
    faq: HOME_FAQS,
    content: renderHome()
  });

  // 2. Product Overview
  pages.push({
    path: '/product/',
    priority: '0.9',
    changefreq: 'weekly',
    metaTitle: 'Модули платформы GramOS — CRM, боты, автоворонки, платежи',
    metaDesc: 'Полный обзор всех модулей GramOS: Telegram CRM, визуальный конструктор сценариев, прием платежей, умные рассылки и Mini App в единой экосистеме.',
    crumbs: [['Главная', '/'], ['Продукт', '']],
    content: renderProductOverview()
  });

  // 3. Product Single Pages
  Object.keys(PRODUCTS).forEach(key => {
    const p = PRODUCTS[key];
    pages.push({
      path: `/product/${p.slug}/`,
      priority: '0.9',
      changefreq: 'weekly',
      metaTitle: p.metaTitle,
      metaDesc: p.metaDesc,
      isProduct: true,
      crumbs: [['Главная', '/'], ['Продукт', '/product/'], [p.crumb, '']],
      faq: p.faq,
      content: renderProductPage(p)
    });
  });

  // 4. Solutions Index
  pages.push({
    path: '/solutions/',
    priority: '0.85',
    changefreq: 'weekly',
    metaTitle: 'Решения для бизнеса в Telegram — клубы, школы, эксперты | GramOS',
    metaDesc: 'Готовые сценарии продаж и автоматизации для закрытых клубов по подписке, онлайн-школ, инфобизнеса, экспертов и продюсерских агентств.',
    crumbs: [['Главная', '/'], ['Решения', '']],
    content: renderSolutionsIndex()
  });

  // 5. Solution Single Pages
  Object.keys(SOLUTIONS).forEach(key => {
    const s = SOLUTIONS[key];
    pages.push({
      path: `/solutions/${s.slug}/`,
      priority: '0.85',
      changefreq: 'weekly',
      metaTitle: s.metaTitle,
      metaDesc: s.metaDesc,
      crumbs: [['Главная', '/'], ['Решения', '/solutions/'], [s.crumb, '']],
      faq: s.faq,
      content: renderSolutionPage(s)
    });
  });

  // 6. Pricing
  pages.push({
    path: '/pricing/',
    priority: '0.95',
    changefreq: 'weekly',
    metaTitle: 'Тарифы и стоимость подписки на GramOS — прозрачные цены без комиссий',
    metaDesc: 'Планы Starter, Growth и Agency. 14 дней бесплатного периода, без комиссии с ваших продаж, оплата по безналичному расчету или картой.',
    crumbs: [['Главная', '/'], ['Тарифы', '']],
    content: renderPricingPage()
  });

  // 7. Demo & Start
  pages.push({
    path: '/demo/',
    priority: '0.9',
    changefreq: 'weekly',
    metaTitle: 'Интерактивное демо и запуск 14 дней бесплатно | GramOS',
    metaDesc: 'Протестируйте интерфейс CRM, визуального конструктора воронок, checkout и рассылок GramOS за 2 минуты прямо в браузере.',
    crumbs: [['Главная', '/'], ['Демо', '']],
    content: renderDemoPage()
  });

  // 8. Integrations
  pages.push({
    path: '/integrations/',
    priority: '0.8',
    changefreq: 'weekly',
    metaTitle: 'Интеграции GramOS — Telegram Stars, ЮKassa, Stripe, CRM, Webhooks',
    metaDesc: 'Подключение платёжных провайдеров, Telegram Bot API, внешних CRM систем, виджетов и интеграция через REST API и Webhooks.',
    crumbs: [['Главная', '/'], ['Интеграции', '']],
    content: renderIntegrationsPage()
  });

  // 9. Roadmap
  pages.push({
    path: '/roadmap/',
    priority: '0.75',
    changefreq: 'weekly',
    metaTitle: 'План развития и Roadmap возможностей платформы | GramOS',
    metaDesc: 'Актуальный статус разработки: что доступно сейчас, что находится в стадии открытой beta, и какие функции появятся в ближайших релизах.',
    crumbs: [['Главная', '/'], ['Roadmap', '']],
    content: renderRoadmapPage()
  });

  // 10. Security
  pages.push({
    path: '/security/',
    priority: '0.8',
    changefreq: 'monthly',
    metaTitle: 'Безопасность, шифрование данных и соответствие 152-ФЗ | GramOS',
    metaDesc: 'Инженерные стандарты защиты GramOS: изоляция проектов, шифрование токенов, валидация Telegram initData, подписи вебхуков и защита от сбоев.',
    crumbs: [['Главная', '/'], ['Безопасность', '']],
    content: renderSecurityPage()
  });

  // 11. Docs Index
  pages.push({
    path: '/docs/',
    priority: '0.85',
    changefreq: 'weekly',
    metaTitle: 'Документация и инструкции по настройке платформы | GramOS',
    metaDesc: 'Официальная база знаний: пошаговое подключение ботов, сборка первых воронок, настройка платежных шлюзов и установка веб-виджета.',
    crumbs: [['Главная', '/'], ['Документация', '']],
    content: renderDocsIndex()
  });

  // 12. Doc Single Pages
  Object.keys(DOCS).forEach(key => {
    const d = DOCS[key];
    pages.push({
      path: `/docs/${d.slug}/`,
      priority: '0.8',
      changefreq: 'monthly',
      metaTitle: `${d.t} — Документация GramOS`,
      metaDesc: d.d,
      crumbs: [['Главная', '/'], ['Документация', '/docs/'], [d.t, '']],
      content: renderDocPage(key)
    });
  });

  // 13. Blog Index
  pages.push({
    path: '/blog/',
    priority: '0.85',
    changefreq: 'daily',
    metaTitle: 'Блог о продажах и автоматизации в Telegram | GramOS',
    metaDesc: 'Статьи, кейсы и практические гайды: как монетизировать Telegram-каналы, настраивать автоворонки и переводить поддержку в CRM.',
    crumbs: [['Главная', '/'], ['Блог', '']],
    content: renderBlogIndex()
  });

  // 14. Blog Posts
  Object.keys(POSTS).forEach(key => {
    const post = POSTS[key];
    pages.push({
      path: `/blog/${post.slug}/`,
      priority: '0.8',
      changefreq: 'monthly',
      metaTitle: post.metaTitle,
      metaDesc: post.metaDesc,
      ogType: 'article',
      crumbs: [['Главная', '/'], ['Блог', '/blog/'], [post.tag, '']],
      content: renderPostPage(key)
    });
  });

  // 15. Contact
  pages.push({
    path: '/contact/',
    priority: '0.7',
    changefreq: 'monthly',
    metaTitle: 'Контакты и служба поддержки клиентов | GramOS',
    metaDesc: 'Свяжитесь с командой GramOS: оперативная поддержка в Telegram @gramos_support, электронная почта и заказ персональной демонстрации.',
    crumbs: [['Главная', '/'], ['Контакты', '']],
    content: renderContactPage()
  });

  // 16. Login
  pages.push({
    path: '/login/',
    priority: '0.3',
    changefreq: 'monthly',
    metaTitle: 'Вход в панель управления GramOS',
    metaDesc: 'Авторизация в рабочей веб-панели GramOS через Telegram или логин и пароль.',
    crumbs: [['Главная', '/'], ['Вход', '']],
    content: renderLoginPage()
  });

  // 17. Legal: Privacy & Terms
  pages.push({
    path: '/legal/privacy/',
    priority: '0.4',
    changefreq: 'yearly',
    metaTitle: 'Политика конфиденциальности и обработки данных | GramOS',
    metaDesc: 'Официальные правила обработки персональных данных сервисом GramOS в строгом соответствии с Федеральным законом РФ № 152-ФЗ.',
    crumbs: [['Главная', '/'], ['Конфиденциальность', '']],
    content: renderLegalPage('privacy')
  });

  pages.push({
    path: '/legal/terms/',
    priority: '0.4',
    changefreq: 'yearly',
    metaTitle: 'Условия использования и лицензионное соглашение | GramOS',
    metaDesc: 'Пользовательское соглашение и условия предоставления доступа к сервису автоматизации GramOS.',
    crumbs: [['Главная', '/'], ['Условия использования', '']],
    content: renderLegalPage('terms')
  });

  // 18. Custom 404 Page
  pages.push({
    path: '/404.html',
    priority: '0.1',
    changefreq: 'yearly',
    metaTitle: '404 — Страница не найдена | GramOS',
    metaDesc: 'Запрашиваемая страница не найдена на сервере GramOS.',
    content: render404Page()
  });

  // Render HTML pages with cache-busting build hash
  const BUILD_ID = Date.now().toString(36);
  console.log(`📄 Generating ${pages.length} static HTML pages (build: ${BUILD_ID})...`);
  pages.forEach(p => {
    const fullHtml = renderLayout(p, p.content, BUILD_ID);
    writePage(p.path, fullHtml);
  });

  // Generate sitemap.xml
  console.log('🗺️ Generating sitemap.xml...');
  const today = new Date().toISOString().split('T')[0];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .filter(p => p.path !== '/404.html' && p.path !== '/login/')
  .map(p => `  <url>
    <loc>${siteConfig.domain}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq || 'weekly'}</changefreq>
    <priority>${p.priority || '0.8'}</priority>
  </url>`)
  .join('\n')}
</urlset>`;
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');

  // Generate robots.txt
  console.log('🤖 Generating robots.txt for Yandex & Google...');
  const hostDomain = siteConfig.domain.replace(/^https?:\/\//, '');
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /login/

User-agent: Yandex
Allow: /
Disallow: /login/
Clean-param: ref /
Clean-param: utm_source&utm_medium&utm_campaign&utm_content&utm_term
Host: ${hostDomain}

Sitemap: ${siteConfig.domain}/sitemap.xml
`;
  fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robotsTxt, 'utf-8');

  // Copy CSS
  console.log('🎨 Copying CSS styles...');
  const cssDest = path.join(DIST_DIR, 'css');
  copyDir(path.join(__dirname, 'src', 'styles'), cssDest);

  // Copy JS
  console.log('⚡ Copying JavaScript client scripts...');
  const jsDest = path.join(DIST_DIR, 'js');
  copyDir(path.join(__dirname, 'src', 'scripts'), jsDest);

  // Copy Public Assets (favicons, manifests, etc.)
  console.log('📦 Copying public static assets...');
  copyDir(path.join(__dirname, 'public'), DIST_DIR);

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`✅ Build completed successfully in ${duration}s! Output is in dist/`);
}

build();
