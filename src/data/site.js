// Конфигурация сайта GramOS и метаданные
module.exports = {
  domain: 'https://gramos.yanvoronkov.ru',
  siteName: 'GramOS',
  defaultTitle: 'GramOS — операционная система для Telegram-бизнеса',
  defaultDesc: 'GramOS объединяет CRM, ботов, автоворонки, рассылки, оплаты и доступы к закрытым продуктам в одной Telegram Mini App и веб-панели.',
  author: 'GramOS Team',
  locale: 'ru_RU',
  ogImage: '/images/og-cover.png',
  disallowIndexing: true, // Защита от индексации поисковиками на время доработки
  contacts: {
    telegram: '@gramos_support',
    telegramUrl: 'https://t.me/gramos_support',
    email: 'hello@gramos.app',
    workHours: 'Пн-Пт: 10:00 - 19:00 (МСК)'
  },
  navigation: [
    {
      title: 'Продукт',
      items: [
        { title: 'CRM и диалоги', desc: 'Карточки контактов, timeline, теги, ответы', url: '/product/crm/' },
        { title: 'Сценарии', desc: 'Визуальные автоворонки и триггеры', url: '/product/automations/' },
        { title: 'Платежи и продукты', desc: 'Checkout, тарифы, выдача доступов', url: '/product/payments/' },
        { title: 'Рассылки', desc: 'Сегменты, планирование, статистика', url: '/product/broadcasts/' },
        { title: 'Web-виджет', desc: 'Чат на сайте со склейкой с Telegram', url: '/product/web-widget/' },
        { title: 'Кабинет покупателя', desc: 'Доступы, подписки, платежи', url: '/product/customer-cabinet/' },
        { title: 'Telegram Mini App', desc: 'Управление бизнесом внутри Telegram', url: '/product/mini-app/' },
        { title: 'Обзор платформы', desc: 'Все модули на одной странице', url: '/product/' }
      ]
    },
    {
      title: 'Решения',
      items: [
        { title: 'Платный клуб', desc: 'Подписки, доступ в каналы, продления', url: '/solutions/paid-community/' },
        { title: 'Онлайн-школа', desc: 'Курсы, ученики, личный кабинет', url: '/solutions/online-school/' },
        { title: 'Эксперт и автор', desc: 'Автоворонка и продажи из контента', url: '/solutions/expert/' },
        { title: 'Агентство и продюсер', desc: 'Мультипроекты, команда, роли', url: '/solutions/agency/' },
        { title: 'Сайт → Telegram', desc: 'Виджет как вход в воронку', url: '/solutions/site-to-telegram/' },
        { title: 'Все сценарии', desc: 'Подбор по типу бизнеса', url: '/solutions/' }
      ]
    },
    { title: 'Тарифы', url: '/pricing/' },
    { title: 'Интеграции', url: '/integrations/' },
    { title: 'Документация', url: '/docs/' },
    {
      title: 'Ещё',
      items: [
        { title: 'Демо и тур', desc: 'Посмотреть интерфейс за 2 минуты', url: '/demo/' },
        { title: 'Roadmap', desc: 'Что доступно, что в beta, что дальше', url: '/roadmap/' },
        { title: 'Безопасность', desc: 'Изоляция данных, токены, платежи', url: '/security/' },
        { title: 'Блог', desc: 'Гайды по Telegram-продажам', url: '/blog/' },
        { title: 'Контакты', desc: 'Связаться с командой', url: '/contact/' }
      ]
    }
  ]
};
