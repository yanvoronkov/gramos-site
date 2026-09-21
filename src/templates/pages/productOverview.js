// Обзор платформы GramOS (Все продукты)
const { MOCKS } = require('../../data/mocks');
const { linkCard, checks, ctaBand, pageHero } = require('../components');

function renderProductOverview() {
  return `
  ${pageHero({
    crumbs: [['Главная', '/'], ['Продукт', '']],
    eyebrow: 'Обзор платформы',
    title: 'Одна платформа вместо десяти сервисов',
    lede: 'GramOS закрывает путь клиента от первого сообщения до оплаты, доступа, повторной продажи и поддержки. Все модули работают на общих контактах, событиях и правах.',
    mock: MOCKS.crm
  })}
  
  <section class="section soft">
    <div class="wrap">
      <div class="center" style="max-width:700px;margin:0 auto 42px">
        <h2>Модули GramOS</h2>
        <p class="lede center">Начните с одного модуля и подключайте остальные по мере роста вашего проекта.</p>
      </div>
      <div class="grid g3">
        ${linkCard({ i: 'users', t: 'CRM и диалоги', d: 'Карточки контактов, timeline, теги, статусы, LTV и ответы из интерфейса.', link: '/product/crm/' })}
        ${linkCard({ i: 'flow', t: 'Сценарии', d: 'Визуальные автоворонки с триггерами Telegram, условиями и задержками.', link: '/product/automations/' })}
        ${linkCard({ i: 'card', t: 'Платежи и продукты', d: 'Тарифы, checkout, Stars, ЮKassa, bePaid, Stripe, Tribute и выдача доступов.', link: '/product/payments/' })}
        ${linkCard({ i: 'send', t: 'Рассылки', d: 'Сегменты, выбор бота, планирование, статистика и действия после доставки.', link: '/product/broadcasts/' })}
        ${linkCard({ i: 'globe', t: 'Web-виджет', d: 'Чат на сайте с Shadow DOM и склейкой гостя с Telegram-контактом.', link: '/product/web-widget/' })}
        ${linkCard({ i: 'phone', t: 'Кабинет покупателя', d: 'Доступы, материалы, подписки и история платежей для клиента.', link: '/product/customer-cabinet/' })}
        ${linkCard({ i: 'phone', t: 'Telegram Mini App', d: 'Управление бизнесом прямо внутри Telegram со смартфона.', link: '/product/mini-app/' })}
        ${linkCard({ i: 'layers', t: 'Мультипроекты и команда', d: 'Несколько бизнесов, изоляция данных, участники, роли и приглашения.', link: '/solutions/agency/' })}
        ${linkCard({ i: 'shield', t: 'Безопасность', d: 'Изоляция проектов, роли, подписи webhook, хранение токенов.', link: '/security/' })}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="split">
        <div>
          <div class="eyebrow">Почему вместе лучше</div>
          <h2>Модули не просто соседствуют — они знают друг о друге</h2>
          <p class="lede">Оплата меняет тег контакта, тег меняет аудиторию рассылки, рассылка запускает сценарий, сценарий выдаёт доступ. Ничего не нужно связывать вручную через Zapier и таблицы.</p>
          ${checks([
            'Одни контакты для бота, канала, сайта и checkout',
            'Одни события для сценариев, рассылок и аналитики',
            'Одни права доступа для команды во всех модулях',
            'Один интерфейс в браузере и в Telegram'
          ])}
        </div>
        <div class="rv">${MOCKS.flow}</div>
      </div>
    </div>
  </section>

  ${ctaBand()}
  `;
}

module.exports = { renderProductOverview };
