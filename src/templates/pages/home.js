// Главная страница GramOS
const { MOCKS, mockDevice } = require('../../data/mocks');
const { card, linkCard, checks, faq, ctaBand } = require('../components');
const { HOME_FAQS } = require('../../data/faqs');
const { renderPricingCalculator } = require('./pricingPage');
const { icon } = require('../../data/icons');

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
                    <img src="/screenshots/funnel-editor.png" alt="GramOS в Telegram: Визуальный конструктор воронки" class="phone-screen-img" loading="lazy" width="1179" height="2556">
                  </div>
                  <div class="phone-screen hero-panel" data-panel="course">
                    <img src="/screenshots/ai-knowledge-base.png" alt="GramOS в Telegram: ИИ и База знаний" class="phone-screen-img" loading="lazy" width="1179" height="2556">
                  </div>
                  <div class="phone-screen hero-panel" data-panel="subs">
                    <img src="/screenshots/customer-cabinet.png" alt="GramOS в Telegram: Подписки и личный кабинет" class="phone-screen-img" loading="lazy" width="1179" height="2354">
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
        <p class="lede center">Шесть ключевых модулей, которые работают на одних и тех же контактах, событиях и правах доступа.</p>
      </div>
      <div class="grid g3">
        ${linkCard({ i: 'users', t: 'CRM и контакты', d: 'Канбан сделок, единая карточка клиента, timeline событий, теги, LTV и ответы прямо из интерфейса.', link: '/product/crm/' })}
        ${linkCard({ i: 'flow', t: 'Сценарии и автоворонки', d: 'Визуальный canvas, Group Canvas, выравнивание Dagre, конвертер Salebot и развилки Webhook.', link: '/product/automations/' })}
        ${linkCard({ i: 'spark', t: 'ИИ и База знаний', d: 'RAG pgvector, парсинг документов PDF/DOCX, распознавание аудио/видео сообщений и нода ИИ в воронках.', link: '/product/ai/' })}
        ${linkCard({ i: 'card', t: 'Платежи, продукты и тарифы', d: 'Публичный checkout с OTO-таймером, Stars, ЮKassa, Stripe и автономный отзыв доступов.', link: '/product/payments/' })}
        ${linkCard({ i: 'send', t: 'Рассылки и сегменты', d: 'Матричный фильтр UniversalConditionBuilder, живой калькулятор охвата и статистика.', link: '/product/broadcasts/' })}
        ${linkCard({ i: 'globe', t: 'Кабинет, checkout и виджет', d: 'Личный кабинет покупателя в Telegram, страница оплаты и чат на сайте со склейкой контактов.', link: '/product/web-widget/' })}
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS -->
  <section class="section" id="how">
    <div class="wrap">
      <div class="center" style="max-width:760px;margin:0 auto 36px">
        <div class="eyebrow">Как это работает</div>
        <h2>Четыре шага до первой автоматической продажи</h2>
        <p class="lede center">От первого клика до поступающих оплат и закрытых каналов — без программистов и сложных настроек.</p>
      </div>

      <div class="stepper-wrap" id="howStepper">
        <div class="stepper-list">
          <div class="stepper-item active" data-step="0">
            <div class="stepper-num">1</div>
            <div class="stepper-info">
              <h3>Подключаете бота и каналы</h3>
              <p>Вставляете токен Telegram-бота от @BotFather, добавляете каналы и группы. GramOS сам подписывается на события.</p>
            </div>
            <div class="stepper-progress"><div class="stepper-progress-fill"></div></div>
          </div>

          <div class="stepper-item" data-step="1">
            <div class="stepper-num">2</div>
            <div class="stepper-info">
              <h3>Создаёте продукт и страницу оплаты</h3>
              <p>Задаете тарифы, цены, скидки OTO и промокоды. Публичный checkout с личным кабинетом готов к приему оплат.</p>
            </div>
            <div class="stepper-progress"><div class="stepper-progress-fill"></div></div>
          </div>

          <div class="stepper-item" data-step="2">
            <div class="stepper-num">3</div>
            <div class="stepper-info">
              <h3>Собираете сценарий на холсте</h3>
              <p>Сообщения, кнопки, ветвления, задержки, AI-ответы и автоматическая выдача доступа — на визуальном canvas без кода.</p>
            </div>
            <div class="stepper-progress"><div class="stepper-progress-fill"></div></div>
          </div>

          <div class="stepper-item" data-step="3">
            <div class="stepper-num">4</div>
            <div class="stepper-info">
              <h3>Получаете оплаты и аналитику</h3>
              <p>Лиды фиксируются в CRM, платежи поступают напрямую на ваш счет, 100% автокик работает автономно 24/7.</p>
            </div>
            <div class="stepper-progress"><div class="stepper-progress-fill"></div></div>
          </div>

          <div class="btns" style="margin-top:14px">
            <a class="btn btn-ghost" href="/docs/first-scenario/">Как собрать первый сценарий →</a>
          </div>
        </div>

        <div class="stepper-stage">
          <div class="mock-device-wrap">
            <div class="mock-device">
              <span class="phone-btn phone-btn-mute" aria-hidden="true"></span>
              <span class="phone-btn phone-btn-up" aria-hidden="true"></span>
              <span class="phone-btn phone-btn-down" aria-hidden="true"></span>
              <span class="phone-btn phone-btn-power" aria-hidden="true"></span>
              <div class="mock-screen-frame">
                <!-- Optional Video Preview -->
                <video class="stepper-video" id="stepperVideo" autoplay muted loop playsinline preload="none" style="display:none;width:100%;height:100%;object-fit:cover;border-radius:32px;">
                  <source src="/videos/how-it-works.mp4" type="video/mp4">
                </video>
                <!-- Interactive Screenshots Slides -->
                <div class="stepper-slides" id="stepperSlides">
                  <div class="stepper-slide active" data-step="0">
                    <img src="/screen-1.png" alt="Шаг 1: Подключение Telegram-бота и каналов в GramOS" class="mock-screen-img" loading="lazy" width="1179" height="2556">
                  </div>
                  <div class="stepper-slide" data-step="1">
                    <img src="/screenshots/public-checkout.png" alt="Шаг 2: Создание продукта и чекаута GramOS" class="mock-screen-img" loading="lazy" width="1179" height="2556">
                  </div>
                  <div class="stepper-slide" data-step="2">
                    <img src="/screenshots/funnel-editor.png" alt="Шаг 3: Сборка сценария на визуальном холсте GramOS" class="mock-screen-img" loading="lazy" width="1179" height="2556">
                  </div>
                  <div class="stepper-slide" data-step="3">
                    <img src="/screenshots/dashboard-analytics.png" alt="Шаг 4: Получение оплат и аналитика дашборда GramOS" class="mock-screen-img" loading="lazy" width="1179" height="2556">
                  </div>
                </div>
                <div class="mock-screen-glare" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION CRM PREVIEW -->
  <section class="section soft">
    <div class="wrap">
      <div class="split">
        <div class="rv">${MOCKS.crm}</div>
        <div>
          <div class="eyebrow">CRM</div>
          <h2>Все клиенты и сделки в единой CRM</h2>
          <p class="lede">Менеджер видит не просто чат, а всю историю отношений с человеком: от первого сообщения до последней оплаты и выданного доступа.</p>
          ${checks([
            'Канбан-доска сделок: этапы «Новый», «Квалифицирован», «Оплачен»',
            'Единая карточка контакта: Telegram ID, username, источник, LTV',
            'Timeline событий: сообщения, оплаты, заметки, выданные доступы',
            'Поиск, теги и быстрые фильтры по всей базе',
            'Ответ клиенту прямо из интерфейса GramOS от имени бота'
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
            'Визуальный canvas без кода с Group Canvas и Dagre',
            'Конвертер Salebot для быстрого переноса воронок',
            'Условия, задержки, ветвления и переходы',
            'Версии сценариев и audit log'
          ])}
          <div class="btns" style="margin-top:22px">
            <a class="btn btn-ghost" href="/product/automations/">Как работают сценарии →</a>
          </div>
        </div>
        <div class="rv">${MOCKS.flow}</div>
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
          <p class="lede">Продукты и тарифы, публичный checkout с OTO-таймером, несколько платёжных провайдеров и личный кабинет покупателя.</p>
          ${checks([
            'Продукты, тарифы и подписки',
            'Публичный checkout с таймером OTO и промокодами',
            'Telegram Stars, ЮKassa, bePaid, Stripe, Tribute',
            'Автономная выдача и гарантированный отзыв прав (автокик)',
            'История платежей и чеки в кабинете клиента'
          ])}
          <p class="tiny muted" style="margin-top:14px">Автоматическая выдача и моментальный отзыв доступов по подписке работают автономно 24/7 без ручной сверки выписок.</p>
          <div class="btns" style="margin-top:22px">
            <a class="btn btn-ghost" href="/product/payments/">Платежи и продукты →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION AI PREVIEW -->
  <section class="section">
    <div class="wrap">
      <div class="split">
        <div class="rv">${MOCKS.ai}</div>
        <div>
          <div class="eyebrow">ИИ и База знаний</div>
          <h2>Умный нейро-ассистент на базе RAG и pgvector</h2>
          <p class="lede">Обучите ИИ на базе знаний вашей компании: каталоги, прайс-листы, регламенты в PDF/DOCX. Ассистент консультирует клиентов, распознает голосовые сообщения и видео-кружки до 20 МБ.</p>
          ${checks([
            'RAG и pgvector: семантический поиск точных фактов без галлюцинаций',
            'Парсинг файлов PDF, DOCX, TXT и импорт страниц сайтов',
            'Мультимодальность: транскрибация аудио и видеосообщений кружков через Whisper',
            'ИИ-нода в визуальных воронках для квалификации и генерации ответов',
            'Бесшовный перевод диалога на живого менеджера в CRM'
          ])}
          <div class="btns" style="margin-top:22px">
            <a class="btn btn-ghost" href="/product/ai/">Подробнее об ИИ и Базе знаний →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION WIDGET PREVIEW -->
  <section class="section soft">
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
        <div class="rv">${mockDevice('/screenshots/dashboard-analytics.png', 'Аналитика и дашборд заказов GramOS')}</div>
        <div>
          <div class="eyebrow">Аналитика</div>
          <h2>Видите, что происходит с продажами</h2>
          <p class="lede">Метрики собираются автоматически из событий CRM, сценариев и платежей — без выгрузок и ручных таблиц.</p>
          <div class="grid g2" style="margin-top:18px">
            <div class="kv"><span class="muted">Период отчета</span><b>За 30 дней</b></div>
            <div class="kv"><span class="muted">Заказов</span><b>27 шт</b></div>
            <div class="kv"><span class="muted">Рост к пред. периоду</span><b>+23.3%</b></div>
            <div class="kv"><span class="muted">Конверсия</span><b>9,8%</b></div>
            <div class="kv"><span class="muted">Выданных доступов</span><b>128</b></div>
            <div class="kv"><span class="muted">Автокик при неоплате</span><b>100%</b></div>
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
        <p class="lede center">Без комиссии GramOS с ваших продаж — вы платите только фиксированную подписку за активную базу контактов.</p>
      </div>
      ${renderPricingCalculator({ compact: true })}
      <div class="center" style="margin-top:26px">
        <a class="btn-link" href="/pricing/">Сравнить все возможности и детальные лимиты в таблице →</a>
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
