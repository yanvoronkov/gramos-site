// Базовый шаблон (HTML Shell) GramOS
const siteConfig = require('../data/site');
const { generateMeta, generateJsonLd } = require('./seo');
const { icon } = require('../data/icons');

function renderLayout(page, content) {
  const currentPath = page.path || '/';

  function isActive(url) {
    if (url === '/' && currentPath === '/') return 'active';
    if (url !== '/' && currentPath.startsWith(url)) return 'active';
    return '';
  }

  return `<!DOCTYPE html>
<html lang="ru" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  
  <!-- SEO & Open Graph Meta -->
  ${generateMeta(page)}
  
  <!-- Schema.org JSON-LD -->
  ${generateJsonLd(page)}
  
  <!-- Favicon & PWA -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="manifest" href="/site.webmanifest">
  <meta name="theme-color" content="#1a8ff0">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  
  <!-- Styles -->
  <link rel="stylesheet" href="/css/tokens.css">
  <link rel="stylesheet" href="/css/base.css">
  <link rel="stylesheet" href="/css/components.css">
</head>
<body>

<!-- Header -->
<header class="header">
  <nav class="wrap nav">
    <a href="/" class="logo">
      <span class="mark">${icon('send')}</span>
      <span class="logo-text">GramOS</span>
    </a>
    
    <div class="nav-links" id="navLinks">
      <!-- Продукт Dropdown -->
      <div class="has-menu">
        <button class="navbtn ${currentPath.startsWith('/product') ? 'active' : ''}" type="button">
          <span>Продукт</span>
          <svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div class="menu menu-grid">
          <a href="/product/crm/" class="menu-item ${isActive('/product/crm/')}">
            <div class="menu-ico">${icon('users')}</div>
            <div class="menu-info">
              <span class="menu-title">CRM и диалоги</span>
              <span class="menu-desc">Чаты, карточки клиентов, timeline и теги</span>
            </div>
          </a>
          <a href="/product/automations/" class="menu-item ${isActive('/product/automations/')}">
            <div class="menu-ico">${icon('flow')}</div>
            <div class="menu-info">
              <span class="menu-title">Сценарии</span>
              <span class="menu-desc">Автоворонки, триггеры и умные боты</span>
            </div>
          </a>
          <a href="/product/payments/" class="menu-item ${isActive('/product/payments/')}">
            <div class="menu-ico">${icon('card')}</div>
            <div class="menu-info">
              <span class="menu-title">Платежи и продукты</span>
              <span class="menu-desc">Checkout, тарифы и автовыдача прав</span>
            </div>
          </a>
          <a href="/product/broadcasts/" class="menu-item ${isActive('/product/broadcasts/')}">
            <div class="menu-ico">${icon('send')}</div>
            <div class="menu-info">
              <span class="menu-title">Рассылки</span>
              <span class="menu-desc">Сегменты, расписание и аналитика кликов</span>
            </div>
          </a>
          <a href="/product/web-widget/" class="menu-item ${isActive('/product/web-widget/')}">
            <div class="menu-ico">${icon('globe')}</div>
            <div class="menu-info">
              <span class="menu-title">Web-виджет</span>
              <span class="menu-desc">Чат на сайте со связкой с профилем в TG</span>
            </div>
          </a>
          <a href="/product/customer-cabinet/" class="menu-item ${isActive('/product/customer-cabinet/')}">
            <div class="menu-ico">${icon('key')}</div>
            <div class="menu-info">
              <span class="menu-title">Кабинет покупателя</span>
              <span class="menu-desc">Подписки, доступы и история платежей</span>
            </div>
          </a>
          <a href="/product/mini-app/" class="menu-item ${isActive('/product/mini-app/')}">
            <div class="menu-ico">${icon('phone')}</div>
            <div class="menu-info">
              <span class="menu-title">Telegram Mini App</span>
              <span class="menu-desc">Полноценный web-сервис внутри Telegram</span>
            </div>
          </a>
          <a href="/product/" class="menu-item ${currentPath === '/product/' ? 'active' : ''}">
            <div class="menu-ico">${icon('layers')}</div>
            <div class="menu-info">
              <span class="menu-title">Обзор платформы</span>
              <span class="menu-desc">Архитектура, все модули и возможности</span>
            </div>
          </a>
        </div>
      </div>
      
      <!-- Решения Dropdown -->
      <div class="has-menu">
        <button class="navbtn ${currentPath.startsWith('/solutions') ? 'active' : ''}" type="button">
          <span>Решения</span>
          <svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div class="menu menu-grid">
          <a href="/solutions/paid-community/" class="menu-item ${isActive('/solutions/paid-community/')}">
            <div class="menu-ico">${icon('key')}</div>
            <div class="menu-info">
              <span class="menu-title">Платный клуб</span>
              <span class="menu-desc">Платные каналы, рекурренты и автокик</span>
            </div>
          </a>
          <a href="/solutions/online-school/" class="menu-item ${isActive('/solutions/online-school/')}">
            <div class="menu-ico">${icon('book')}</div>
            <div class="menu-info">
              <span class="menu-title">Онлайн-школа</span>
              <span class="menu-desc">Выдача уроков, домашки и кабинет ученика</span>
            </div>
          </a>
          <a href="/solutions/expert/" class="menu-item ${isActive('/solutions/expert/')}">
            <div class="menu-ico">${icon('spark')}</div>
            <div class="menu-info">
              <span class="menu-title">Эксперт и автор</span>
              <span class="menu-desc">Прогревы, продажа контента и консультаций</span>
            </div>
          </a>
          <a href="/solutions/agency/" class="menu-item ${isActive('/solutions/agency/')}">
            <div class="menu-ico">${icon('layers')}</div>
            <div class="menu-info">
              <span class="menu-title">Агентство и продюсер</span>
              <span class="menu-desc">Мультипроектность, роли и права доступа</span>
            </div>
          </a>
          <a href="/solutions/site-to-telegram/" class="menu-item ${isActive('/solutions/site-to-telegram/')}">
            <div class="menu-ico">${icon('globe')}</div>
            <div class="menu-info">
              <span class="menu-title">Сайт → Telegram</span>
              <span class="menu-desc">Конвертация веб-трафика в базу подписчиков</span>
            </div>
          </a>
          <a href="/solutions/" class="menu-item ${currentPath === '/solutions/' ? 'active' : ''}">
            <div class="menu-ico">${icon('flow')}</div>
            <div class="menu-info">
              <span class="menu-title">Все сценарии</span>
              <span class="menu-desc">Каталог готовых кейсов под вашу нишу</span>
            </div>
          </a>
        </div>
      </div>
      
      <!-- Direct Links -->
      <a class="nav-link ${isActive('/pricing/')}" href="/pricing/">Тарифы</a>
      <a class="nav-link ${isActive('/integrations/')}" href="/integrations/">Интеграции</a>
      <a class="nav-link ${isActive('/docs/')}" href="/docs/">Документация</a>
      
      <!-- Ещё Dropdown -->
      <div class="has-menu">
        <button class="navbtn ${['/demo/', '/roadmap/', '/security/', '/blog/', '/contact/'].some(p => currentPath.startsWith(p)) ? 'active' : ''}" type="button">
          <span>Ещё</span>
          <svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div class="menu menu-right">
          <a href="/demo/" class="menu-item ${isActive('/demo/')}">
            <div class="menu-ico">${icon('spark')}</div>
            <div class="menu-info">
              <span class="menu-title">Демо и тур</span>
              <span class="menu-desc">Интерактивный обзор за 2 минуты</span>
            </div>
          </a>
          <a href="/roadmap/" class="menu-item ${isActive('/roadmap/')}">
            <div class="menu-ico">${icon('clock')}</div>
            <div class="menu-info">
              <span class="menu-title">Roadmap</span>
              <span class="menu-desc">Текущие релизы и план развития платформы</span>
            </div>
          </a>
          <a href="/security/" class="menu-item ${isActive('/security/')}">
            <div class="menu-ico">${icon('shield')}</div>
            <div class="menu-info">
              <span class="menu-title">Безопасность</span>
              <span class="menu-desc">Изоляция данных, 152-ФЗ и шифрование</span>
            </div>
          </a>
          <a href="/blog/" class="menu-item ${isActive('/blog/')}">
            <div class="menu-ico">${icon('note')}</div>
            <div class="menu-info">
              <span class="menu-title">Блог</span>
              <span class="menu-desc">Статьи и гайды по Telegram-маркетингу</span>
            </div>
          </a>
          <a href="/contact/" class="menu-item ${isActive('/contact/')}">
            <div class="menu-ico">${icon('mail')}</div>
            <div class="menu-info">
              <span class="menu-title">Контакты</span>
              <span class="menu-desc">Поддержка и связь с командой GramOS</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    
    <div class="nav-right">
      <button class="icon-btn" id="themeBtn" aria-label="Сменить тему оформления" title="Сменить тему"></button>
      <a class="btn btn-ghost btn-sm" href="/login/">Войти</a>
      <a class="btn btn-primary btn-sm" href="/demo/">Начать бесплатно</a>
      <button class="icon-btn burger" id="burger" aria-label="Открыть мобильное меню">
        ${icon('burger')}
      </button>
    </div>
  </nav>
</header>

<!-- Backdrop overlay for Mobile Drawer -->
<div class="drawer-backdrop" id="drawerBackdrop"></div>

<!-- Mobile Navigation Drawer -->
<div class="drawer" id="drawer" role="dialog" aria-modal="true" aria-label="Навигационное меню">
  <div class="drawer-head">
    <a href="/" class="logo">
      <span class="mark">${icon('send')}</span>
      <span class="logo-text">GramOS</span>
    </a>
    <button class="icon-btn" id="drawerClose" aria-label="Закрыть меню">
      ${icon('close')}
    </button>
  </div>
  
  <div class="drawer-body">
    <!-- Section 1: Продукты -->
    <div class="drawer-section">
      <div class="drawer-section-title">Продукт</div>
      <div class="drawer-nav">
        <a href="/product/" class="drawer-link ${currentPath === '/product/' ? 'active' : ''}">
          <span class="d-ico">${icon('layers')}</span>
          <span class="d-text">Обзор платформы</span>
        </a>
        <a href="/product/crm/" class="drawer-link ${isActive('/product/crm/')}">
          <span class="d-ico">${icon('users')}</span>
          <span class="d-text">CRM и диалоги</span>
        </a>
        <a href="/product/automations/" class="drawer-link ${isActive('/product/automations/')}">
          <span class="d-ico">${icon('flow')}</span>
          <span class="d-text">Сценарии и воронки</span>
        </a>
        <a href="/product/payments/" class="drawer-link ${isActive('/product/payments/')}">
          <span class="d-ico">${icon('card')}</span>
          <span class="d-text">Платежи и продукты</span>
        </a>
        <a href="/product/broadcasts/" class="drawer-link ${isActive('/product/broadcasts/')}">
          <span class="d-ico">${icon('send')}</span>
          <span class="d-text">Рассылки</span>
        </a>
        <a href="/product/web-widget/" class="drawer-link ${isActive('/product/web-widget/')}">
          <span class="d-ico">${icon('globe')}</span>
          <span class="d-text">Web-виджет</span>
        </a>
        <a href="/product/customer-cabinet/" class="drawer-link ${isActive('/product/customer-cabinet/')}">
          <span class="d-ico">${icon('key')}</span>
          <span class="d-text">Кабинет покупателя</span>
        </a>
        <a href="/product/mini-app/" class="drawer-link ${isActive('/product/mini-app/')}">
          <span class="d-ico">${icon('phone')}</span>
          <span class="d-text">Telegram Mini App</span>
        </a>
      </div>
    </div>
    
    <!-- Section 2: Решения -->
    <div class="drawer-section">
      <div class="drawer-section-title">Решения</div>
      <div class="drawer-nav">
        <a href="/solutions/paid-community/" class="drawer-link ${isActive('/solutions/paid-community/')}">
          <span class="d-ico">${icon('key')}</span>
          <span class="d-text">Платный клуб</span>
        </a>
        <a href="/solutions/online-school/" class="drawer-link ${isActive('/solutions/online-school/')}">
          <span class="d-ico">${icon('book')}</span>
          <span class="d-text">Онлайн-школа</span>
        </a>
        <a href="/solutions/expert/" class="drawer-link ${isActive('/solutions/expert/')}">
          <span class="d-ico">${icon('spark')}</span>
          <span class="d-text">Эксперт и автор</span>
        </a>
        <a href="/solutions/agency/" class="drawer-link ${isActive('/solutions/agency/')}">
          <span class="d-ico">${icon('layers')}</span>
          <span class="d-text">Агентство</span>
        </a>
        <a href="/solutions/site-to-telegram/" class="drawer-link ${isActive('/solutions/site-to-telegram/')}">
          <span class="d-ico">${icon('globe')}</span>
          <span class="d-text">Сайт → Telegram</span>
        </a>
        <a href="/solutions/" class="drawer-link ${currentPath === '/solutions/' ? 'active' : ''}">
          <span class="d-ico">${icon('flow')}</span>
          <span class="d-text">Все сценарии</span>
        </a>
      </div>
    </div>
    
    <!-- Section 3: Навигация -->
    <div class="drawer-section">
      <div class="drawer-section-title">Компания и ресурсы</div>
      <div class="drawer-nav">
        <a href="/pricing/" class="drawer-link ${isActive('/pricing/')}">
          <span class="d-ico">${icon('card')}</span>
          <span class="d-text">Тарифы</span>
        </a>
        <a href="/integrations/" class="drawer-link ${isActive('/integrations/')}">
          <span class="d-ico">${icon('plug')}</span>
          <span class="d-text">Интеграции</span>
        </a>
        <a href="/docs/" class="drawer-link ${isActive('/docs/')}">
          <span class="d-ico">${icon('book')}</span>
          <span class="d-text">Документация</span>
        </a>
        <a href="/demo/" class="drawer-link ${isActive('/demo/')}">
          <span class="d-ico">${icon('spark')}</span>
          <span class="d-text">Демо</span>
        </a>
        <a href="/roadmap/" class="drawer-link ${isActive('/roadmap/')}">
          <span class="d-ico">${icon('clock')}</span>
          <span class="d-text">Roadmap</span>
        </a>
        <a href="/security/" class="drawer-link ${isActive('/security/')}">
          <span class="d-ico">${icon('shield')}</span>
          <span class="d-text">Безопасность</span>
        </a>
        <a href="/blog/" class="drawer-link ${isActive('/blog/')}">
          <span class="d-ico">${icon('note')}</span>
          <span class="d-text">Блог</span>
        </a>
        <a href="/contact/" class="drawer-link ${isActive('/contact/')}">
          <span class="d-ico">${icon('mail')}</span>
          <span class="d-text">Контакты</span>
        </a>
      </div>
    </div>
  </div>
  
  <div class="drawer-actions">
    <a class="btn btn-ghost btn-sm" href="/login/" style="flex:1">Войти</a>
    <a class="btn btn-primary btn-sm" href="/demo/" style="flex:1">Начать бесплатно</a>
  </div>
</div>

<!-- Main Content Area -->
<main id="app">
  ${content}
</main>

<!-- Footer -->
<footer class="footer">
  <div class="wrap">
    <div class="f-grid">
      <div>
        <a href="/" class="logo" style="margin-bottom:12px">
          <span class="mark">${icon('send')}</span>
          <span class="logo-text">GramOS</span>
        </a>
        <p class="small muted" style="max-width:34ch">Операционная система для бизнеса в Telegram: CRM, сценарии, платежи, доступы и рассылки в одном контуре.</p>
        <div class="btns">
          <a class="btn btn-primary btn-sm" href="/demo/">Начать бесплатно</a>
        </div>
      </div>
      
      <div>
        <h5>Продукт</h5>
        <a href="/product/crm/">CRM</a>
        <a href="/product/automations/">Сценарии</a>
        <a href="/product/payments/">Платежи</a>
        <a href="/product/broadcasts/">Рассылки</a>
        <a href="/product/web-widget/">Web-виджет</a>
        <a href="/product/customer-cabinet/">Кабинет покупателя</a>
        <a href="/product/mini-app/">Mini App</a>
      </div>
      
      <div>
        <h5>Решения</h5>
        <a href="/solutions/paid-community/">Платный клуб</a>
        <a href="/solutions/online-school/">Онлайн-школа</a>
        <a href="/solutions/expert/">Эксперты</a>
        <a href="/solutions/agency/">Агентства</a>
        <a href="/solutions/site-to-telegram/">Сайт → Telegram</a>
        <a href="/solutions/">Все решения</a>
      </div>
      
      <div>
        <h5>Ресурсы</h5>
        <a href="/docs/">Документация</a>
        <a href="/blog/">Блог</a>
        <a href="/integrations/">Интеграции</a>
        <a href="/roadmap/">Roadmap</a>
        <a href="/demo/">Демо</a>
        <a href="/security/">Безопасность</a>
      </div>
      
      <div>
        <h5>Компания</h5>
        <a href="/pricing/">Тарифы</a>
        <a href="/contact/">Контакты</a>
        <a href="/login/">Войти</a>
        <a href="/legal/privacy/">Политика конфиденциальности</a>
        <a href="/legal/terms/">Условия использования</a>
      </div>
    </div>
    
    <div class="f-bottom">
      <span>© <span id="year">2026</span> GramOS. Все права защищены.</span>
      <span>Сделано для тех, кто продаёт в Telegram</span>
    </div>
  </div>
</footer>

<!-- Scripts -->
<script src="/js/main.js" defer></script>
</body>
</html>`;
}

module.exports = { renderLayout };
