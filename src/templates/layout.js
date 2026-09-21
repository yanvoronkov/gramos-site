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
      GramOS
    </a>
    
    <div class="nav-links" id="navLinks">
      <div class="has-menu">
        <button class="navbtn ${currentPath.startsWith('/product') ? 'active' : ''}">
          Продукт <svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div class="menu">
          <a href="/product/crm/">CRM и диалоги<span>Карточки контактов, timeline, теги, ответы</span></a>
          <a href="/product/automations/">Сценарии<span>Визуальные автоворонки и триггеры</span></a>
          <a href="/product/payments/">Платежи и продукты<span>Checkout, тарифы, выдача доступов</span></a>
          <a href="/product/broadcasts/">Рассылки<span>Сегменты, планирование, статистика</span></a>
          <a href="/product/web-widget/">Web-виджет<span>Чат на сайте со склейкой с Telegram</span></a>
          <a href="/product/customer-cabinet/">Кабинет покупателя<span>Доступы, подписки, платежи</span></a>
          <a href="/product/mini-app/">Telegram Mini App<span>Управление бизнесом внутри Telegram</span></a>
          <a href="/product/">Обзор платформы<span>Все модули на одной странице</span></a>
        </div>
      </div>
      
      <div class="has-menu">
        <button class="navbtn ${currentPath.startsWith('/solutions') ? 'active' : ''}">
          Решения <svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div class="menu">
          <a href="/solutions/paid-community/">Платный клуб<span>Подписки, доступ в каналы, продления</span></a>
          <a href="/solutions/online-school/">Онлайн-школа<span>Курсы, ученики, личный кабинет</span></a>
          <a href="/solutions/expert/">Эксперт и автор<span>Автоворонка и продажи из контента</span></a>
          <a href="/solutions/agency/">Агентство и продюсер<span>Мультипроекты, команда, роли</span></a>
          <a href="/solutions/site-to-telegram/">Сайт → Telegram<span>Виджет как вход в воронку</span></a>
          <a href="/solutions/">Все сценарии<span>Подбор по типу бизнеса</span></a>
        </div>
      </div>
      
      <a class="${isActive('/pricing/')}" href="/pricing/">Тарифы</a>
      <a class="${isActive('/integrations/')}" href="/integrations/">Интеграции</a>
      <a class="${isActive('/docs/')}" href="/docs/">Документация</a>
      
      <div class="has-menu">
        <button class="navbtn ${['/demo/', '/roadmap/', '/security/', '/blog/', '/contact/'].some(p => currentPath.startsWith(p)) ? 'active' : ''}">
          Ещё <svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div class="menu one">
          <a href="/demo/">Демо и тур<span>Посмотреть интерфейс за 2 минуты</span></a>
          <a href="/roadmap/">Roadmap<span>Что доступно, что в beta, что дальше</span></a>
          <a href="/security/">Безопасность<span>Изоляция данных, токены, платежи</span></a>
          <a href="/blog/">Блог<span>Гайды по Telegram-продажам</span></a>
          <a href="/contact/">Контакты<span>Связаться с командой</span></a>
        </div>
      </div>
    </div>
    
    <div class="nav-right">
      <button class="icon-btn" id="themeBtn" aria-label="Сменить тему" title="Тема"></button>
      <a class="btn btn-ghost btn-sm" href="/login/">Войти</a>
      <a class="btn btn-primary btn-sm" href="/demo/">Начать бесплатно</a>
      <button class="icon-btn burger" id="burger" aria-label="Открыть меню">
        ${icon('burger')}
      </button>
    </div>
  </nav>
</header>

<!-- Mobile Navigation Drawer -->
<div class="drawer" id="drawer">
  <div class="drawer-head">
    <a href="/" class="logo">
      <span class="mark">${icon('send')}</span>
      GramOS
    </a>
    <button class="icon-btn" id="drawerClose" aria-label="Закрыть меню">
      ${icon('close')}
    </button>
  </div>
  
  <h4>Продукт</h4>
  <a href="/product/">Обзор платформы</a>
  <a href="/product/crm/">CRM и диалоги</a>
  <a href="/product/automations/">Сценарии и автоворонки</a>
  <a href="/product/payments/">Платежи и продукты</a>
  <a href="/product/broadcasts/">Рассылки</a>
  <a href="/product/web-widget/">Web-виджет</a>
  <a href="/product/customer-cabinet/">Кабинет покупателя</a>
  <a href="/product/mini-app/">Telegram Mini App</a>
  
  <h4>Решения</h4>
  <a href="/solutions/paid-community/">Платный клуб</a>
  <a href="/solutions/online-school/">Онлайн-школа</a>
  <a href="/solutions/expert/">Эксперт и автор</a>
  <a href="/solutions/agency/">Агентство</a>
  <a href="/solutions/site-to-telegram/">Сайт → Telegram</a>
  <a href="/solutions/">Все сценарии</a>
  
  <h4>Компания и ресурсы</h4>
  <a href="/pricing/">Тарифы</a>
  <a href="/integrations/">Интеграции</a>
  <a href="/docs/">Документация</a>
  <a href="/demo/">Демо</a>
  <a href="/roadmap/">Roadmap</a>
  <a href="/security/">Безопасность</a>
  <a href="/blog/">Блог</a>
  <a href="/contact/">Контакты</a>
  <a href="/login/">Войти</a>
  
  <div style="margin-top:26px">
    <a class="btn btn-primary btn-lg" href="/demo/" style="width:100%">Начать бесплатно</a>
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
          GramOS
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
