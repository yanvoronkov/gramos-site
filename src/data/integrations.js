// Интеграции платформы GramOS
const INTEGRATIONS = [
  { t: 'Telegram Bot API', s: 'ok', d: 'Боты, группы, каналы, inline-кнопки, deep links и события вступления и выхода.', i: 'send' },
  { t: 'Telegram Mini App', s: 'ok', d: 'Панель управления внутри Telegram с проверкой initData на сервере.', i: 'phone' },
  { t: 'Telegram Stars', s: 'ok', d: 'Оплата цифровых товаров и доступов внутри Telegram.', i: 'spark' },
  { t: 'ЮKassa', s: 'ok', d: 'Приём платежей в рублях, чеки и webhooks с проверкой подписи.', i: 'card' },
  { t: 'bePaid', s: 'ok', d: 'Платежи для рынков СНГ, рекуррентные списания.', i: 'card' },
  { t: 'Stripe', s: 'ok', d: 'Международные платежи и подписки в валюте.', i: 'card' },
  { t: 'Tribute', s: 'ok', d: 'Донаты и подписки для Telegram-авторов.', i: 'card' },
  { t: 'Ручные оплаты', s: 'ok', d: 'Подтверждение платежа менеджером для переводов и счетов юрлицам.', i: 'note' },
  { t: 'Web-виджет', s: 'ok', d: 'Скрипт чата для любого сайта с изоляцией стилей через Shadow DOM.', i: 'globe' },
  { t: 'Webhooks и API', s: 'beta', d: 'Исходящие события и вызовы из сценариев для связи с вашими сервисами.', i: 'plug' },
  { t: 'AmoCRM', s: 'soon', d: 'Двусторонняя синхронизация сделок и контактов.', i: 'users' },
  { t: 'Bitrix24', s: 'soon', d: 'Передача лидов и статусов в корпоративную CRM.', i: 'users' },
  { t: 'Google Sheets', s: 'soon', d: 'Выгрузка контактов и платежей в таблицу.', i: 'chart' }
];

module.exports = { INTEGRATIONS };
