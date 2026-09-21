// Макеты интерфейса GramOS (UI Mockups)
const { icon } = require('./icons');

const MOCKS = {
  crm: `<div class="mock">
    <div class="mock-bar"><i class="dot"></i><i class="dot"></i><i class="dot"></i><span class="title">GramOS — CRM · Контакты</span></div>
    <div class="mock-body">
      <div class="mock-row"><span class="av">АМ</span><span class="t"><b>Анна Морозова</b><span>@anna_m · «А доступ сразу после оплаты?»</span></span><span class="tag g">Оплатила</span></div>
      <div class="mock-row"><span class="av" style="background:linear-gradient(135deg,#f0883b,#f0576f)">ИК</span><span class="t"><b>Игорь Козлов</b><span>@ikozlov · Смотрел тарифы 2 раза</span></span><span class="tag">Горячий</span></div>
      <div class="mock-row"><span class="av" style="background:linear-gradient(135deg,#31c48d,#0ea371)">ДС</span><span class="t"><b>Дарья Соколова</b><span>Пришла с сайта · виджет</span></span><span class="tag v">Новый лид</span></div>
      <div class="stat-mini"><div><b>1 248</b><span>контактов</span></div><div><b>37</b><span>активных чатов</span></div><div><b>₽412k</b><span>выручка за месяц</span></div></div>
    </div></div>`,

  flow: `<div class="mock">
    <div class="mock-bar"><i class="dot"></i><i class="dot"></i><i class="dot"></i><span class="title">Сценарий · «Воронка на курс»</span></div>
    <div class="flow">
      <div class="node trigger"><span class="n-ico">${icon('bolt')}</span><span><b>Триггер: ключевое слово «цена»</b><small>Бот · канал · виджет</small></span></div>
      <div class="conn"></div>
      <div class="node"><span class="n-ico">${icon('chat')}</span><span><b>Сообщение с тарифами</b><small>+ кнопки «Купить» и «Вопрос»</small></span></div>
      <div class="conn"></div>
      <div class="node"><span class="n-ico">${icon('clock')}</span><span><b>Задержка 2 часа, если нет оплаты</b><small>Условие: тег ≠ «покупатель»</small></span></div>
      <div class="conn"></div>
      <div class="node pay"><span class="n-ico">${icon('key')}</span><span><b>После оплаты: выдать доступ + тег</b><small>Контакт → сегмент «Покупатели»</small></span></div>
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
