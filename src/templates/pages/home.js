// Главная страница GramOS
const { MOCKS } = require('../../data/mocks');
const { card, linkCard, checks, faq, ctaBand } = require('../components');
const { HOME_FAQS } = require('../../data/faqs');
const { PLANS } = require('../../data/plans');
const { icon } = require('../../data/icons');

function fmt(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function renderPricingCardsCompact() {
  return `<div class="price-grid">${PLANS.map(p => `
    <div class="plan rv ${p.hot ? 'hot' : ''}">
      ${p.hot ? '<span class="badge" style="align-self:flex-start;margin-bottom:10px;color:var(--accent);border-color:color-mix(in srgb,var(--accent) 40%,transparent)">Популярный</span>' : ''}
      <h3 style="margin-bottom:.15em">${p.name}</h3>
      <p class="small muted" style="min-height:42px">${p.desc}</p>
      <div class="amount">₽${fmt(p.m)} <span>/ мес</span></div>
      <p class="tiny muted" style="margin:6px 0 0">при помесячной оплате</p>
      <a class="btn ${p.hot ? 'btn-primary' : 'btn-ghost'}" href="https://app.gramos.pro/auth?utm_source=site&utm_medium=desktop&utm_campaign=home_pricing_${p.name.toLowerCase()}" data-smart-cta="home_pricing_${p.name.toLowerCase()}" target="_blank" rel="noopener">Попробовать 14 дней</a>
      ${checks(p.f.slice(0, 5))}
    </div>
  `).join('')}</div>`;
}

function renderHome() {
  return `
  <!-- HERO -->
  <section class="hero">
    <div class="wrap">
      <div class="split hero-split">
        <div class="hero-text-col">
          <div class="hero-eyebrow"><span class="dot"></span> Для платных каналов, онлайн-школ, клубов и авторов</div>
          <h1 class="hero-title">Создавайте в Telegram без кода:<br>
            <span class="hero-typewriter-wrap">
              <span class="hero-typewriter-text grad" id="heroTypewriterText">платные клубы</span><span class="hero-typewriter-cursor" id="heroCursor" aria-hidden="true">|</span>
            </span>
          </h1>
          <p class="lede">Принимайте оплату, автоматизируйте доступы к продуктам, запускайте ботов и автоворонки, храните клиентов в CRM — всё в одном мини-приложении Telegram.</p>
          
          <div class="hero-actions">
            <a class="btn btn-primary btn-lg" href="https://app.gramos.pro/auth?utm_source=site&utm_medium=desktop&utm_campaign=site_hero" data-smart-cta="site_hero" target="_blank" rel="noopener">Начать в один клик →</a>
            <a class="btn btn-ghost btn-lg" href="#how">Посмотреть, как работает</a>
          </div>
          <div class="hero-notes">
            <span><b class="check">✓</b> Без карты</span>
            <span><b class="check">✓</b> Без комиссии GramOS</span>
            <span><b class="check">✓</b> Можно подключить существующего бота</span>
          </div>
        </div>

        <div class="hero-visual-col">
          <!-- Scenario selector tabs -->
          <div class="hero-scenario-tabs" id="heroScenarioTabs">
            <button type="button" class="hero-tab on" data-scenario="club">
              <span class="hero-tab-dot"></span>
              <span>Платный клуб</span>
            </button>
            <button type="button" class="hero-tab" data-scenario="flow">
              <span class="hero-tab-dot"></span>
              <span>Воронка продаж</span>
            </button>
            <button type="button" class="hero-tab" data-scenario="course">
              <span class="hero-tab-dot"></span>
              <span>ИИ-консультант</span>
            </button>
            <button type="button" class="hero-tab" data-scenario="subs">
              <span class="hero-tab-dot"></span>
              <span>Подписки</span>
            </button>
          </div>

          <!-- Smartphone Mockup Stage -->
          <div class="phone-stage">
            <div class="phone-device">
              <!-- Physical hardware elements -->
              <span class="phone-btn phone-btn-mute" aria-hidden="true"></span>
              <span class="phone-btn phone-btn-up" aria-hidden="true"></span>
              <span class="phone-btn phone-btn-down" aria-hidden="true"></span>
              <span class="phone-btn phone-btn-power" aria-hidden="true"></span>

              <!-- Display Screen Frame -->
              <div class="phone-screen-frame">
                <div class="phone-screens-wrap" id="heroPanelsWrap">
                  <div class="phone-screen hero-panel active" data-panel="club">
                    <img src="/screen-1.png" alt="GramOS в Telegram: Сценарии платного клуба" class="phone-screen-img" loading="eager" width="1179" height="2556">
                  </div>
                  <div class="phone-screen hero-panel" data-panel="flow">
                    <img src="/screen-2.png" alt="GramOS в Telegram: Визуальный конструктор воронки" class="phone-screen-img" loading="lazy" width="1179" height="2556">
                  </div>
                  <div class="phone-screen hero-panel" data-panel="course">
                    <img src="/screen-3.png" alt="GramOS в Telegram: CRM база контактов и ИИ" class="phone-screen-img" loading="lazy" width="1179" height="2556">
                  </div>
                  <div class="phone-screen hero-panel" data-panel="subs">
                    <img src="/screen-1.png" alt="GramOS в Telegram: Подписки и рекуррентные платежи" class="phone-screen-img" loading="lazy" width="1179" height="2556">
                  </div>
                </div>
                <!-- Screen glass reflection overlay -->
                <div class="phone-glare" aria-hidden="true"></div>
              </div>
            </div>

            <!-- Floating SaaS Highlights around device -->
            <div class="phone-float-badge badge-float-left">
              <span class="badge-float-ico">⚡</span>
              <div class="badge-float-info">
                <b>Автовыдача за 1 сек</b>
                <small>Доступ в закрытый канал</small>
              </div>
            </div>

            <div class="phone-float-badge badge-float-right">
              <span class="badge-float-ico">💳</span>
              <div class="badge-float-info">
                <b>0% комиссии</b>
                <small>ЮKassa • Stars • Мир</small>
              </div>
            </div>
          </div>

          <!-- Auto-rotation progress indicator -->
          <div class="hero-progress-bar">
            <div class="hero-progress-fill" id="heroProgressFill"></div>
          </div>
        </div>
      </div>

      <!-- Centered Offer Badge across the hero width -->
      <div class="hero-offer-center">
        <div class="hero-offer-badge">
          <span class="offer-tag">Тариф Бесплатный</span>
          <span class="offer-text">Для новых клиентов <b>неограниченный бесплатный доступ до 300 контактов</b></span>
        </div>
      </div>
    </div>
  </section>

  <!-- LOGOS / TRUST -->
  <section class="section tight soft">
    <div class="wrap center">
      <p class="tiny muted" style="letter-spacing:.1em;text-transform:uppercase;margin-bottom:18px">Работает с тем, чем вы уже пользуетесь</p>
      <div class="logos">
        <span>Telegram Bot API</span>
        <span>Telegram Stars</span>
        <span>ЮKassa</span>
        <span>bePaid</span>
        <span>Stripe</span>
        <span>Tribute</span>
        <span>Webhooks</span>
      </div>
    </div>
  </section>

  <!-- PAIN POINTS -->
  <section class="section">
    <div class="wrap">
      <div class="center" style="max-width:760px;margin:0 auto 44px">
        <div class="eyebrow">Проблема</div>
        <h2>Когда бизнес растёт в Telegram, всё быстро расползается</h2>
        <p class="lede center">Лиды в личке, оплаты в одном сервисе, доступы вручную, рассылки отдельно. Менеджеры теряют историю, а владелец не видит цифры.</p>
      </div>
      <div class="grid g3">
        ${card({ i: 'chat', t: 'История теряется', d: 'Клиенты пишут в разные боты, каналы и личку. Никто не помнит, о чём договаривались в прошлый раз.' })}
        ${card({ i: 'key', t: 'Доступы вручную', d: 'После оплаты кто-то из команды руками добавляет человека в канал и сверяет платежи в выписке.' })}
        ${card({ i: 'filter', t: 'Непонятно, кто горячий', d: 'Не видно, кто уже купил, кто смотрел тарифы, а кому нужно просто напомнить.' })}
        ${card({ i: 'layers', t: '5–10 сервисов на один бизнес', d: 'Конструктор ботов, таблица, платёжка, сервис рассылок, отдельный чат на сайте — и всё это надо склеивать.' })}
        ${card({ i: 'chart', t: 'Нет цифр', d: 'Выручка, конверсия и источники лидов собираются вручную раз в месяц — и то приблизительно.' })}
        ${card({ i: 'team', t: 'Команда мешает друг другу', d: 'Все сидят под одним аккаунтом бота, права не разграничены, проекты клиентов перемешаны.' })}
      </div>
    </div>
  </section>

  <!-- SOLUTION OVERVIEW -->
  <section class="section soft">
    <div class="wrap">
      <div class="center" style="max-width:760px;margin:0 auto 44px">
        <div class="eyebrow">Решение</div>
        <h2>GramOS собирает все процессы Telegram-бизнеса в один рабочий контур</h2>
        <p class="lede center">Пять модулей, которые работают на одних и тех же контактах, событиях и правах доступа.</p>
      </div>
      <div class="grid g3">
        ${linkCard({ i: 'users', t: 'CRM и контакты', d: 'Единая карточка клиента, timeline событий, теги, статусы, LTV и ответы прямо из интерфейса.', link: '/product/crm/' })}
        ${linkCard({ i: 'flow', t: 'Сценарии и автоматизации', d: 'Визуальный canvas, триггеры Telegram, условия, задержки, версии и audit log.', link: '/product/automations/' })}
        ${linkCard({ i: 'card', t: 'Платежи, продукты и тарифы', d: 'Публичный checkout, Stars, ЮKassa, bePaid, Stripe, Tribute и выдача доступов.', link: '/product/payments/' })}
        ${linkCard({ i: 'send', t: 'Рассылки и сегменты', d: 'Аудитории по тегам и условиям, выбор бота-отправителя, планирование и статистика.', link: '/product/broadcasts/' })}
        ${linkCard({ i: 'globe', t: 'Кабинет, checkout и виджет', d: 'Личный кабинет покупателя, страница оплаты и чат на сайте со склейкой с Telegram.', link: '/product/web-widget/' })}
        ${linkCard({ i: 'layers', t: 'Мультипроекты и команда', d: 'Несколько бизнесов и ботов, изоляция данных, участники, роли и приглашения.', link: '/solutions/agency/' })}
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS -->
  <section class="section" id="how">
    <div class="wrap">
      <div class="split">
        <div>
          <div class="eyebrow">Как это работает</div>
          <h2>Четыре шага до первой автоматической продажи</h2>
          <div class="steps" style="margin-top:28px">
            <div class="step rv">
              <h3>Подключаете бота и каналы</h3>
              <p>Вставляете токен Telegram-бота, добавляете каналы и группы. GramOS сам подписывается на нужные события.</p>
            </div>
            <div class="step rv">
              <h3>Создаёте продукт и страницу оплаты</h3>
              <p>Продукт, тариф, цена, промокод — и публичный checkout готов к отправке в чат или на сайт.</p>
            </div>
            <div class="step rv">
              <h3>Собираете сценарий</h3>
              <p>Сообщение, кнопки, условия, задержки, теги и выдача доступа — на визуальном canvas, без кода.</p>
            </div>
            <div class="step rv">
              <h3>Получаете продажи и цифры</h3>
              <p>Лиды падают в CRM, рассылки уходят по сегментам, оплаты проходят автоматически, аналитика собирается сама.</p>
            </div>
          </div>
          <div class="btns" style="margin-top:28px">
            <a class="btn btn-ghost" href="/docs/first-scenario/">Как собрать первый сценарий →</a>
          </div>
        </div>
        <div class="rv">${MOCKS.flow}</div>
      </div>
    </div>
  </section>

  <!-- SECTION CRM PREVIEW -->
  <section class="section soft">
    <div class="wrap">
      <div class="split">
        <div class="rv">${MOCKS.cabinet}</div>
        <div>
          <div class="eyebrow">CRM</div>
          <h2>Все клиенты Telegram в одной CRM</h2>
          <p class="lede">Менеджер видит не просто чат, а всю историю отношений с человеком: от первого сообщения до последней оплаты и выданного доступа.</p>
          ${checks([
            'Единая карточка контакта: Telegram ID, username, источник',
            'Timeline событий: сообщения, оплаты, заметки, доступы',
            'Теги, статусы и LTV для сегментации',
            'Поиск и фильтры по всей базе',
            'Ответ клиенту прямо из интерфейса GramOS'
          ])}
          <div class="btns" style="margin-top:22px">
            <a class="btn btn-ghost" href="/product/crm/">Подробнее о CRM →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION SCENARIOS PREVIEW -->
  <section class="section">
    <div class="wrap">
      <div class="split">
        <div>
          <div class="eyebrow">Сценарии</div>
          <h2>Автоворонки, которые понимают Telegram-контекст</h2>
          <p class="lede">Триггеры на команды, ключевые слова, кнопки, события каналов, webhook и расписание. Действия — от сообщения и тега до выдачи доступа.</p>
          <div class="card rv" style="margin:22px 0">
            <p class="quote" style="margin:0">Пользователь пишет «цена» → бот отправляет тарифы → нажатие кнопки открывает checkout → после оплаты контакт получает доступ и попадает в сегмент «покупатель».</p>
          </div>
          ${checks([
            'Визуальный canvas без кода',
            'Условия, задержки, ветвления и переходы',
            'Версии сценариев и audit log',
            'Сценарии для ботов, групп, каналов и виджета'
          ])}
          <div class="btns" style="margin-top:22px">
            <a class="btn btn-ghost" href="/product/automations/">Как работают сценарии →</a>
          </div>
        </div>
        <div class="rv">${MOCKS.broadcast}</div>
      </div>
    </div>
  </section>

  <!-- SECTION MONETIZATION PREVIEW -->
  <section class="section soft">
    <div class="wrap">
      <div class="split">
        <div class="rv">${MOCKS.pay}</div>
        <div>
          <div class="eyebrow">Монетизация</div>
          <h2>Продавайте доступы, курсы и подписки прямо из Telegram</h2>
          <p class="lede">Продукты и тарифы, публичный checkout, несколько платёжных провайдеров и личный кабинет покупателя.</p>
          ${checks([
            'Продукты, тарифы и подписки',
            'Публичный checkout и оплата из чата',
            'Telegram Stars, ЮKassa, bePaid, Stripe, Tribute',
            'Промокоды, скидки и допродажи (OTO)',
            'История платежей и чеки в кабинете клиента'
          ])}
          <p class="tiny muted" style="margin-top:14px">Автоматическая выдача и отзыв доступов по подписке доступна в beta — актуальный статус всегда указан в <a class="btn-link" href="/roadmap/">Roadmap</a>.</p>
          <div class="btns" style="margin-top:22px">
            <a class="btn btn-ghost" href="/product/payments/">Платежи и продукты →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION WIDGET PREVIEW -->
  <section class="section">
    <div class="wrap">
      <div class="split">
        <div>
          <div class="eyebrow">Web-виджет</div>
          <h2>Подключите сайт к Telegram-воронке</h2>
          <p class="lede">Лёгкий widget.js на Shadow DOM не ломает вёрстку сайта, общается по WebSocket и переводит гостя в Telegram с сохранением истории.</p>
          ${checks([
            'Одна строка кода на сайт',
            'Shadow DOM: стили сайта не конфликтуют с виджетом',
            'Живой чат с ботом или оператором',
            'Кнопка перехода в Telegram через deep link',
            'Склейка гостя сайта с Telegram-контактом в CRM'
          ])}
          <div class="btns" style="margin-top:22px">
            <a class="btn btn-ghost" href="/product/web-widget/">Как работает виджет →</a>
          </div>
        </div>
        <div class="rv">${MOCKS.widget}</div>
      </div>
    </div>
  </section>

  <!-- SECTION ANALYTICS PREVIEW -->
  <section class="section soft">
    <div class="wrap">
      <div class="split">
        <div class="rv">${MOCKS.analytics}</div>
        <div>
          <div class="eyebrow">Аналитика</div>
          <h2>Видите, что происходит с продажами</h2>
          <p class="lede">Метрики собираются автоматически из событий CRM, сценариев и платежей — без выгрузок и ручных таблиц.</p>
          <div class="grid g2" style="margin-top:18px">
            <div class="kv"><span class="muted">Новые контакты</span><b>+312</b></div>
            <div class="kv"><span class="muted">Активные чаты</span><b>37</b></div>
            <div class="kv"><span class="muted">Выручка</span><b>₽412k</b></div>
            <div class="kv"><span class="muted">Конверсия в оплату</span><b>9,8%</b></div>
            <div class="kv"><span class="muted">Топ-канал</span><b>«Внутри продаж»</b></div>
            <div class="kv"><span class="muted">Выданных доступов</span><b>128</b></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SOLUTIONS / USE CASES -->
  <section class="section">
    <div class="wrap">
      <div class="center" style="max-width:720px;margin:0 auto 40px">
        <div class="eyebrow">Сценарии использования</div>
        <h2>Пять типовых конфигураций GramOS</h2>
        <p class="lede center">Выберите свой сценарий — внутри уже собраны нужные модули, шаблоны воронок и настройки оплат.</p>
      </div>
      <div class="grid g3">
        ${linkCard({ i: 'key', t: 'Закрытый клуб по подписке', d: 'Оплата, автоматический доступ в канал, продления и возвраты ушедших.', link: '/solutions/paid-community/' })}
        ${linkCard({ i: 'book', t: 'Онлайн-школа с курсами', d: 'Продажа курса, личный кабинет ученика, выдача уроков и напоминания.', link: '/solutions/online-school/' })}
        ${linkCard({ i: 'spark', t: 'Эксперт с автоворонкой', d: 'Лид-магнит, прогрев, консультация и продажа без ручной переписки.', link: '/solutions/expert/' })}
        ${linkCard({ i: 'layers', t: 'Агентство и продюсер', d: 'Несколько клиентов, ботов и брендов в одном аккаунте с ролями.', link: '/solutions/agency/' })}
        ${linkCard({ i: 'globe', t: 'Сайт + Telegram', d: 'Виджет собирает лидов с сайта и переводит их в Telegram-воронку.', link: '/solutions/site-to-telegram/' })}
        ${linkCard({ i: 'chat', t: 'Поддержка из лички в CRM', d: 'Все обращения в одном окне, быстрые ответы, теги и история.', link: '/product/crm/' })}
      </div>
    </div>
  </section>

  <!-- PRICING TEASER -->
  <section class="section soft">
    <div class="wrap">
      <div class="center" style="max-width:700px;margin:0 auto 40px">
        <div class="eyebrow">Тарифы</div>
        <h2>Начните бесплатно, платите по мере роста</h2>
        <p class="lede center">Без комиссии GramOS с ваших продаж — вы платите только за подписку и комиссию платёжного провайдера.</p>
      </div>
      ${renderPricingCardsCompact()}
      <div class="center" style="margin-top:26px">
        <a class="btn-link" href="/pricing/">Сравнить все тарифы и лимиты →</a>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="section">
    <div class="wrap" style="max-width:820px">
      <div class="center" style="margin-bottom:36px">
        <div class="eyebrow">Вопросы</div>
        <h2>Частые вопросы</h2>
      </div>
      ${faq(HOME_FAQS)}
    </div>
  </section>

  ${ctaBand()}
  `;
}

module.exports = { renderHome };
