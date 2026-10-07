// Макеты интерфейса GramOS (UI Mockups)
const { icon } = require('./icons');

const MOCKS = {
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

  // 2. Сценарий: Воронка продаж (Визуальный граф нод сценария в Telegram)
  flow: `<div class="mock mock-hero-sync">
    <div class="mock-bar"><i class="dot"></i><i class="dot"></i><i class="dot"></i><span class="title">GramOS Canvas · Воронка продаж лидов</span><span class="live-pill" style="margin-left:auto">● активен</span></div>
    <div class="flow" style="padding:14px">
      <div class="node trigger"><span class="n-ico">${icon('bolt')}</span><span><b>1. Триггер: ключевое слово «старт»</b><small>Канал · Бот · Реклама Telegram Ads</small></span></div>
      <div class="conn"></div>
      <div class="node"><span class="n-ico">${icon('chat')}</span><span><b>2. Лид-магнит + квалификация</b><small>Выдача PDF + кнопки выбора тарифа</small></span></div>
      <div class="conn"></div>
      <div class="node"><span class="n-ico">${icon('clock')}</span><span><b>3. Задержка 2 часа, если нет оплаты</b><small>Условие: тег ≠ «покупатель» → дожим</small></span></div>
      <div class="conn"></div>
      <div class="node pay"><span class="n-ico">${icon('key')}</span><span><b>4. После оплаты: тег + доступ в CRM</b><small>Сегмент «Горячие клиенты» · LTV обновлен</small></span></div>
    </div>
  </div>`,

  // 3. Сценарий: Онлайн-курс (Личный кабинет ученика и выдача уроков)
  course: `<div class="mock mock-hero-sync">
    <div class="mock-bar"><i class="dot"></i><i class="dot"></i><i class="dot"></i><span class="title">GramOS · Кабинет ученика в Telegram</span><span class="live-pill" style="margin-left:auto">● Mini App</span></div>
    <div class="mock-body">
      <div class="mock-row"><span class="av" style="background:linear-gradient(135deg,#5b5cf0,#8c6cf6)">К</span><span class="t"><b>Курс «Telegram-маркетинг 2026»</b><span>Тариф с куратором · Доступ активен</span></span><span class="tag g">Оплачен</span></div>
      <div class="stat-mini"><div><b>14 из 20</b><span>уроков открыто</span></div><div><b>85%</b><span>прогресс курса</span></div><div><b>3</b><span>ДЗ проверено</span></div></div>
      <div class="mock-row" style="justify-content:space-between">
        <span class="t"><b>Модуль 3: Запуск платных воронок</b><span>Видео 24 мин · Домашнее задание сдано</span></span>
        <span class="tag v">Смотреть</span>
      </div>
      <div class="mock-row" style="justify-content:space-between">
        <span class="t"><b>Модуль 4: Прием платежей и CRM</b><span>Откроется завтра в 10:00 (по расписанию)</span></span>
        <span class="tag">Заблокирован</span>
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

  crm: `<div class="mock">
    <div class="mock-bar"><i class="dot"></i><i class="dot"></i><i class="dot"></i><span class="title">GramOS — CRM · Контакты</span></div>
    <div class="mock-body">
      <div class="mock-row"><span class="av">АМ</span><span class="t"><b>Анна Морозова</b><span>@anna_m · «А доступ сразу после оплаты?»</span></span><span class="tag g">Оплатила</span></div>
      <div class="mock-row"><span class="av" style="background:linear-gradient(135deg,#f0883b,#f0576f)">ИК</span><span class="t"><b>Игорь Козлов</b><span>@ikozlov · Смотрел тарифы 2 раза</span></span><span class="tag">Горячий</span></div>
      <div class="mock-row"><span class="av" style="background:linear-gradient(135deg,#31c48d,#0ea371)">ДС</span><span class="t"><b>Дарья Соколова</b><span>Пришла с сайта · виджет</span></span><span class="tag v">Новый лид</span></div>
      <div class="stat-mini"><div><b>1 248</b><span>контактов</span></div><div><b>37</b><span>активных чатов</span></div><div><b>₽412k</b><span>выручка за месяц</span></div></div>
    </div></div>`,

  pay: `<div class="mock">
    <div class="mock-bar"><i class="dot"></i><i class="dot"></i><i class="dot"></i><span class="title">Checkout · Клуб «Внутри»</span></div>
    <div class="mock-body">
      <div class="mock-row" style="justify-content:space-between"><span class="t"><b>Подписка на месяц</b><span>Доступ в закрытый канал и чат</span></span><b>₽1 990</b></div>
      <div class="mock-row" style="justify-content:space-between"><span class="t"><b>Промокод START20</b><span>Скидка 20% на первый платёж</span></span><span class="tag g">−₽398</span></div>
      <div class="kbd"><span>Telegram Stars</span><span>ЮKassa</span><span>bePaid</span><span>Stripe</span><span>Tribute</span></div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding-top:6px"><span class="muted small">К оплате</span><b style="font-family:Manrope;font-size:1.3rem">₽1 592</b></div>
      <div class="btn btn-primary" style="width:100%">Оплатить и получить доступ</div>
    </div></div>`,

  broadcast: `<div class="mock">
    <div class="mock-bar"><i class="dot"></i><i class="dot"></i><i class="dot"></i><span class="title">Рассылка · «Закрываем набор»</span></div>
    <div class="mock-body">
      <div class="mock-row"><span class="t"><b>Аудитория: тег «горячий» + без оплаты</b><span>Отправитель: @club_sales_bot</span></span><span class="tag">842</span></div>
      <div class="bars"><i style="height:46%"></i><i style="height:62%"></i><i style="height:38%"></i><i style="height:78%"></i><i style="height:92%"></i><i style="height:66%"></i><i style="height:84%"></i></div>
      <div class="stat-mini"><div><b>96,4%</b><span>доставлено</span></div><div><b>31,2%</b><span>перешли</span></div><div><b>48</b><span>оплат</span></div></div>
    </div></div>`,

  widget: `<div class="mock">
    <div class="mock-bar"><i class="dot"></i><i class="dot"></i><i class="dot"></i><span class="title">Виджет на сайте · гость #4821</span></div>
    <div class="mock-body"><div class="chat">
      <div class="bub in">Здравствуйте! Подскажу по тарифам и доступам 🙂</div>
      <div class="bub out">Сколько стоит доступ на год?</div>
      <div class="bub in">₽17 900 вместо ₽23 880. Продолжим в Telegram, чтобы не потерять переписку?</div>
      <div class="kbd"><span>Открыть в Telegram</span><span>Оставить e-mail</span></div>
    </div>
    <div class="mock-row"><span class="t"><b>Гость склеен с контактом @ikozlov</b><span>История переписки перенесена в CRM</span></span><span class="tag g">Готово</span></div>
    </div></div>`,

  cabinet: `<div class="mock">
    <div class="mock-bar"><i class="dot"></i><i class="dot"></i><i class="dot"></i><span class="title">Личный кабинет покупателя</span></div>
    <div class="mock-body">
      <div class="mock-row"><span class="av">К</span><span class="t"><b>Курс «Telegram-продажи»</b><span>Доступ активен · 12 из 18 уроков</span></span><span class="tag g">Активен</span></div>
      <div class="mock-row"><span class="av" style="background:linear-gradient(135deg,#8d7bff,#5b6bf5)">П</span><span class="t"><b>Подписка «Клуб»</b><span>Продление 14 марта · ₽1 990/мес</span></span><span class="tag v">Подписка</span></div>
      <div class="mock-row"><span class="t"><b>История платежей</b><span>6 операций · чеки и статусы</span></span><span class="tag">Открыть</span></div>
    </div></div>`,

  miniapp: `<div class="mock">
    <div class="mock-bar"><i class="dot"></i><i class="dot"></i><i class="dot"></i><span class="title">Telegram Mini App · GramOS</span></div>
    <div class="mock-body">
      <div class="stat-mini"><div><b>+38</b><span>лидов сегодня</span></div><div><b>12</b><span>новых оплат</span></div><div><b>4</b><span>ждут ответа</span></div></div>
      <div class="mock-row"><span class="av">ИК</span><span class="t"><b>Игорь Козлов</b><span>«Готов оплатить, дайте ссылку»</span></span><span class="tag">Ответить</span></div>
      <div class="chat"><div class="bub out">Держите ссылку на оплату 👇</div><div class="bub in">Спасибо, оплатил!</div></div>
    </div></div>`,

  analytics: `<div class="mock">
    <div class="mock-bar"><i class="dot"></i><i class="dot"></i><i class="dot"></i><span class="title">Аналитика · Март</span></div>
    <div class="mock-body">
      <div class="stat-mini"><div><b>₽412k</b><span>выручка</span></div><div><b>9,8%</b><span>конверсия</span></div><div><b>₽3 140</b><span>средний чек</span></div></div>
      <div class="bars"><i style="height:34%"></i><i style="height:52%"></i><i style="height:44%"></i><i style="height:70%"></i><i style="height:58%"></i><i style="height:88%"></i><i style="height:96%"></i><i style="height:74%"></i></div>
      <div class="mock-row"><span class="t"><b>Топ-источник: канал «Внутри продаж»</b><span>214 контактов · 41 оплата</span></span><span class="tag g">19,2%</span></div>
    </div></div>`
};

module.exports = { MOCKS };
