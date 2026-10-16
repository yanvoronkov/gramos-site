// Макеты интерфейса GramOS (UI Mockups)
const { icon } = require('./icons');

function mockDevice(src, alt = 'Интерфейс GramOS') {
  return `<div class="mock-device-wrap">
    <div class="mock-device">
      <span class="phone-btn phone-btn-mute" aria-hidden="true"></span>
      <span class="phone-btn phone-btn-up" aria-hidden="true"></span>
      <span class="phone-btn phone-btn-down" aria-hidden="true"></span>
      <span class="phone-btn phone-btn-power" aria-hidden="true"></span>
      <div class="mock-screen-frame">
        <img src="${src}" alt="${alt}" class="mock-screen-img" loading="lazy" width="1179" height="2556">
        <div class="mock-screen-glare" aria-hidden="true"></div>
      </div>
    </div>
  </div>`;
}

const MOCKS = {
  // Реальные скриншоты в стильной рамке смартфона
  crm: mockDevice('/screenshots/crm-kanban.png', 'Канбан-доска сделок в GramOS CRM'),
  crmChat: mockDevice('/screenshots/crm-chat.png', 'Карточка контакта и чат в GramOS CRM'),
  flow: mockDevice('/screenshots/funnel-editor.png', 'Холст автоворонки GramOS Canvas'),
  broadcast: mockDevice('/screenshots/broadcast-editor.png', 'Конструктор условий рассылок GramOS'),
  pay: mockDevice('/screenshots/public-checkout.png', 'Оплата счета в чекауте GramOS'),
  cabinet: mockDevice('/screenshots/customer-cabinet.png', 'Личный кабинет покупателя в Telegram'),
  ai: mockDevice('/screenshots/ai-knowledge-base.png', 'База знаний RAG и выбор модели эмбеддингов GramOS'),

  // 1. Сценарий: Платный клуб (Чекаут + моментальная автовыдача доступа в закрытый канал)
  club: `<div class="mock mock-hero-sync">
    <div class="mock-bar"><i class="dot"></i><i class="dot"></i><i class="dot"></i><span class="title">GramOS · Checkout & Автовыдача доступа</span><span class="live-pill" style="margin-left:auto">● онлайн</span></div>
    <div class="mock-body">
      <div class="mock-row" style="justify-content:space-between">
        <span class="t"><b>Закрытый Telegram-клуб «INSIDERS»</b><span>Подписка на 1 месяц · закрытый канал + чат</span></span>
        <b>₽2 490</b>
      </div>
      <div class="mock-row" style="justify-content:space-between">
        <span class="t"><b>Промокод «START»</b><span>Скидка 20% на первый месяц</span></span>
        <span class="tag g">−₽498</span>
      </div>
      <div class="kbd">
        <span>Telegram Stars (⭐ 1 200)</span>
        <span>ЮKassa / Карты РФ</span>
        <span>bePaid (Мир)</span>
        <span>Stripe</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:4px 0">
        <span class="muted small">Итого к оплате</span>
        <b style="font-family:Manrope,sans-serif;font-size:1.35rem;color:var(--text)">₽1 992</b>
      </div>
      <div class="btn btn-primary" style="width:100%;pointer-events:none">Оплатить и получить ссылку</div>
      <div class="mock-row" style="background:color-mix(in srgb,var(--good) 10%,var(--surface));border-color:color-mix(in srgb,var(--good) 35%,transparent);margin-top:2px">
        <span class="n-ico" style="background:var(--good);color:#fff;border-radius:6px;width:22px;height:22px;display:grid;place-items:center;font-size:12px;font-weight:900">✓</span>
        <span class="t"><b style="color:var(--good)">Оплата прошла мгновенно</b><span>Одноразовая ссылка в канал выслана в Telegram бота</span></span>
      </div>
    </div>
  </div>`,

  // 3. Сценарий: ИИ-консультанты (Умный бот-консультант с автоответами и квалификацией)
  course: `<div class="mock mock-hero-sync">
    <div class="mock-bar"><i class="dot"></i><i class="dot"></i><i class="dot"></i><span class="title">GramOS · ИИ-Консультант 24/7</span><span class="live-pill" style="margin-left:auto">● AI онлайн</span></div>
    <div class="mock-body">
      <div class="mock-row"><span class="av" style="background:linear-gradient(135deg,#5b5cf0,#8c6cf6)">AI</span><span class="t"><b>Нейро-ассистент по продуктам</b><span>Обучен на вашей базе знаний · отвечает за 1.2 сек</span></span><span class="tag g">Активен</span></div>
      <div class="chat" style="display:flex;flex-direction:column;gap:8px;padding:6px 0">
        <div class="bub in" style="align-self:flex-start;max-width:85%;padding:8px 12px;background:var(--surface-2);border-radius:12px;font-size:0.83rem">Здравствуйте! Подскажите, какой тариф подойдет для сообщества на 2 000 человек?</div>
        <div class="bub out" style="align-self:flex-end;max-width:88%;padding:8px 12px;background:color-mix(in srgb,var(--accent) 15%,var(--surface));border:1px solid color-mix(in srgb,var(--accent) 30%,transparent);border-radius:12px;font-size:0.83rem;color:var(--text)">Вам идеально подойдет тариф «Growth»: до 15 000 контактов, рекуррентные подписки и автокик. Сформировать счет со скидкой 20%? 👇</div>
      </div>
      <div class="mock-row" style="justify-content:space-between;background:color-mix(in srgb,var(--good) 8%,var(--surface));border-color:color-mix(in srgb,var(--good) 30%,transparent)">
        <span class="t"><b style="color:var(--good)">Лид квалифицирован ИИ</b><span>Бюджет подтвержден · Ссылка на оплату отправлена</span></span>
        <span class="tag g">В CRM</span>
      </div>
    </div>
  </div>`,

  // 4. Сценарий: Закрытые подписки (Рекурренты, автопродления и авто-кик)
  subs: `<div class="mock mock-hero-sync">
    <div class="mock-bar"><i class="dot"></i><i class="dot"></i><i class="dot"></i><span class="title">GramOS · Управление рекуррентными подписками</span><span class="live-pill" style="margin-left:auto">● рекуррент</span></div>
    <div class="mock-body">
      <div class="stat-mini"><div><b>₽482k</b><span>MRR подписок</span></div><div><b>94,2%</b><span>успешных автосписаний</span></div><div><b>0</b><span>ручных сверок</span></div></div>
      <div class="mock-row"><span class="av">АМ</span><span class="t"><b>Анна Морозова</b><span>Автоплатеж ₽1 990 списан успешно · Продлено до 15.11</span></span><span class="tag g">Продлена</span></div>
      <div class="mock-row"><span class="av" style="background:linear-gradient(135deg,#f0883b,#f0576f)">ИВ</span><span class="t"><b>Иван Васильев</b><span>Недостаточно средств · Отправлено напоминание в бот</span></span><span class="tag" style="color:#d97706;background:#fef3c7">Повтор через 24ч</span></div>
      <div class="mock-row"><span class="av" style="background:linear-gradient(135deg,#64748b,#475569)">ДС</span><span class="t"><b>Дмитрий Смирнов</b><span>Подписка отменена → Автокик из 3 закрытых каналов</span></span><span class="tag" style="color:#ef4444;background:#fee2e2">Доступ снят</span></div>
    </div>
  </div>`,

  // Реалистичный браузерный мок с живым виджетом
  widget: `<div class="mock mock-browser">
    <div class="mock-bar">
      <i class="dot" style="background:#ef4444"></i>
      <i class="dot" style="background:#eab308"></i>
      <i class="dot" style="background:#22c55e"></i>
      <span class="title">yoursite.pro · Живой Web-виджет GramOS</span>
      <span class="live-pill" style="margin-left:auto">● онлайн</span>
    </div>
    <div class="mock-browser-body" style="background:var(--bg);padding:18px;position:relative;border-radius:0 0 16px 16px;">
      <div style="opacity:0.25;margin-bottom:14px">
        <div style="height:12px;width:110px;background:var(--muted);border-radius:4px;margin-bottom:6px"></div>
        <div style="height:7px;width:220px;background:var(--border-strong);border-radius:4px;margin-bottom:5px"></div>
        <div style="height:7px;width:160px;background:var(--border-strong);border-radius:4px"></div>
      </div>
      <div class="widget-preview-card" style="position:relative;margin-left:auto;max-width:320px;background:var(--surface);border:1px solid var(--border-strong);border-radius:16px;box-shadow:0 14px 36px rgba(0,0,0,0.28);overflow:hidden">
        <div style="background:linear-gradient(135deg,var(--accent),#8c6cf6);padding:10px 14px;color:#fff;display:flex;align-items:center;gap:10px">
          <span style="width:8px;height:8px;border-radius:50%;background:#22c55e;box-shadow:0 0 8px #22c55e"></span>
          <div style="display:flex;flex-direction:column">
            <strong style="font-size:0.84rem;line-height:1.2">Поддержка GramOS</strong>
            <span style="font-size:0.7rem;opacity:0.85">Отвечаем за 1 минуту</span>
          </div>
        </div>
        <div style="padding:14px;display:flex;flex-direction:column;gap:10px;font-size:0.82rem">
          <div style="background:var(--surface-2);padding:8px 12px;border-radius:12px;align-self:flex-start;max-width:88%">Здравствуйте! Подскажу по тарифам и помогу настроить интеграцию 🙂</div>
          <div style="background:color-mix(in srgb,var(--accent) 15%,var(--surface));border:1px solid color-mix(in srgb,var(--accent) 30%,transparent);padding:8px 12px;border-radius:12px;align-self:flex-end;max-width:88%">Сколько стоит доступ на год?</div>
          <div style="background:var(--surface-2);padding:8px 12px;border-radius:12px;align-self:flex-start;max-width:92%">₽17 900 вместо ₽23 880. Продолжим в Telegram, чтобы сохранить историю? 👇</div>
          <div class="btn btn-primary btn-sm" style="width:100%;text-align:center;justify-content:center;font-size:0.78rem;padding:7px 10px;margin-top:2px;display:flex;align-items:center;gap:6px;pointer-events:none">
            ${icon('send')} <span>Открыть в Telegram (@gram_os_bot)</span>
          </div>
        </div>
        <div style="padding:6px 12px;background:var(--bg-soft);border-top:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;font-size:0.7rem;color:var(--muted)">
          <span>Гость склеен с @username</span>
          <span style="color:var(--ok);font-weight:600">● WebSocket Live</span>
        </div>
      </div>
    </div>
  </div>`,

  miniapp: mockDevice('/screenshots/crm-chat.png', 'Telegram Mini App GramOS'),

  analytics: mockDevice('/screenshots/dashboard-analytics.png', 'Аналитика и дашборд заказов GramOS')
};

module.exports = { MOCKS, mockDevice };
