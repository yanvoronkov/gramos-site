// Каталог решений (Все сценарии бизнеса)
const { MOCKS } = require('../../data/mocks');
const { linkCard, ctaBand, pageHero } = require('../components');

function renderSolutionsIndex() {
  return `
  ${pageHero({
    crumbs: [['Главная', '/'], ['Решения', '']],
    eyebrow: 'Решения',
    title: 'Выберите сценарий своего бизнеса',
    lede: 'Одни и те же модули собираются по-разному в зависимости от того, что именно вы продаёте в Telegram.',
    mock: MOCKS.flow
  })}

  <section class="section soft">
    <div class="wrap">
      <div class="grid g3">
        ${linkCard({ i: 'key', t: 'Платный клуб', d: 'Подписки, доступ в закрытый канал, продления и возврат ушедших.', link: '/solutions/paid-community/' })}
        ${linkCard({ i: 'book', t: 'Онлайн-школа', d: 'Курсы, потоки, личный кабинет ученика и контроль доходимости.', link: '/solutions/online-school/' })}
        ${linkCard({ i: 'spark', t: 'Эксперт и автор', d: 'Лид-магнит, прогрев, консультации и продажи без ручной переписки.', link: '/solutions/expert/' })}
        ${linkCard({ i: 'layers', t: 'Агентство и продюсер', d: 'Мультипроекты, команда, роли и быстрый запуск новых клиентов.', link: '/solutions/agency/' })}
        ${linkCard({ i: 'globe', t: 'Сайт → Telegram', d: 'Виджет как вход в воронку и склейка истории гостя с контактом.', link: '/solutions/site-to-telegram/' })}
        ${linkCard({ i: 'chat', t: 'Поддержка и сервис', d: 'Обращения из лички переезжают в CRM с тегами, историей и ответственными.', link: '/product/crm/' })}
      </div>
    </div>
  </section>

  ${ctaBand()}
  `;
}

module.exports = { renderSolutionsIndex };
