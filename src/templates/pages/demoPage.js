// Страница интерактивного демо и прямого запуска GramOS (Zero Web-Forms)
const { MOCKS } = require('../../data/mocks');
const { checks } = require('../components');
const { icon } = require('../../data/icons');

const TOUR = [
  { k: 'crm', t: 'CRM и Канбан', d: 'Канбан-доска сделок и карточка клиента с историей диалогов, тегами, LTV и квалификацией лидов.' },
  { k: 'flow', t: 'Сценарии и воронки', d: 'Визуальный canvas автоворонки с Group Canvas, автовыравниванием Dagre и развилками Webhook.' },
  { k: 'pay', t: 'Checkout и оплаты', d: 'Публичная страница оплаты с тарифами, OTO-таймером, Stars, ЮKassa и автоматической выдачей доступов.' },
  { k: 'broadcast', t: 'Умные рассылки', d: 'Матричный фильтр UniversalConditionBuilder по тегам и статусам подписок с живым калькулятором охвата.' },
  { k: 'ai', t: 'ИИ и База знаний', d: 'RAG pgvector, семантический поиск по PDF/DOCX, расшифровка голосовых и видеосообщений кружков до 20 МБ.' },
  { k: 'cabinet', t: 'Кабинет покупателя', d: 'Личный кабинет в Telegram без паролей: активные доступы, история платежей и управление подписками.' },
  { k: 'widget', t: 'Web-виджет', d: 'Чат на сайте на Shadow DOM: живой диалог по WebSocket со склейкой гостя с Telegram-профилем в CRM.' }
];

function renderDemoPage() {
  return `
  <section class="hero">
    <div class="wrap center">
      <div class="eyebrow">Демо</div>
      <h1>Посмотрите GramOS за две минуты</h1>
      <p class="lede center">Кликабельный тур по интерфейсу: CRM, сценарии, checkout, рассылки, виджет и аналитика. Без регистрации.</p>
    </div>
  </section>

  <!-- INTERACTIVE TOUR TABS -->
  <section class="section" style="padding-top:0">
    <div class="wrap">
      <div class="tabs center" id="tourTabs" style="justify-content:center">
        ${TOUR.map((t, i) => `
          <button class="${i === 0 ? 'on' : ''}" data-i="${i}">${t.t}</button>
        `).join('')}
      </div>
      
      <div id="tourPanels">
        ${TOUR.map((t, i) => `
          <div class="tabpanel ${i === 0 ? 'on' : ''}" data-i="${i}">
            <div class="split">
              <div>
                <h2>${t.t}</h2>
                <p class="lede">${t.d}</p>
                <div class="btns" style="margin-top:20px">
                  <a class="btn btn-primary" href="https://app.gramos.pro/auth?utm_source=site&utm_medium=desktop&utm_campaign=demo_tour" data-smart-cta="demo_tour" target="_blank" rel="noopener">Попробовать в GramOS →</a>
                  <a class="btn btn-ghost" href="https://t.me/gram_os_bot" target="_blank" rel="noopener">Задать вопрос в боте</a>
                </div>
              </div>
              <div>${MOCKS[t.k]}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- START SECTION (ZERO WEB-FORMS DIRECT LAUNCH) -->
  <section class="section soft">
    <div class="wrap">
      <div class="split">
        <div>
          <div class="eyebrow">Старт</div>
          <h2>Запустите GramOS за 1 минуту</h2>
          <p class="lede">14 дней бесплатного доступа без привязки карты. Начните в браузере или сразу внутри Telegram Mini App.</p>
          ${checks([
            '14 дней бесплатно',
            'Готовые шаблоны воронок',
            'Без комиссии с продаж',
            'Личный кабинет и чекаут из коробки'
          ])}
          <div class="btns" style="margin-top:28px">
            <a class="btn btn-primary btn-lg" href="https://app.gramos.pro/auth?utm_source=site&utm_medium=desktop&utm_campaign=demo_start" data-smart-cta="demo_start" target="_blank" rel="noopener">Запустить веб-версию →</a>
            <a class="btn btn-ghost btn-lg" href="https://t.me/gram_os_bot/app" target="_blank" rel="noopener">Открыть в Telegram Mini App</a>
          </div>
        </div>
        
        <div class="card rv" style="padding:32px;display:flex;flex-direction:column;justify-content:center">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
            <div class="ico" style="margin:0">${icon('users')}</div>
            <span class="badge">Индивидуальный разбор</span>
          </div>
          <h3 style="margin-bottom:10px">Персональная помощь с запуском</h3>
          <p class="muted" style="margin-bottom:20px;font-size:0.95rem;line-height:1.55">Нужен персональный разбор воронки под ваш бизнес? Напишите напрямую основателю — обсудим архитектуру продаж и поможем перенести базу.</p>
          <div>
            <a class="btn btn-ghost" href="https://t.me/yanvoronkov" target="_blank" rel="noopener" style="width:100%;justify-content:center">
              Написать напрямую основателю (@yanvoronkov) →
            </a>
          </div>
          <div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border);display:flex;align-items:center;gap:10px">
            <div style="width:8px;height:8px;border-radius:50%;background:#10b981;flex-shrink:0"></div>
            <span class="small muted">ИИ-ассистент в боте ответит мгновенно в <a class="btn-link" href="https://t.me/gram_os_bot" target="_blank" rel="noopener">@gram_os_bot</a></span>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}

module.exports = { renderDemoPage };
