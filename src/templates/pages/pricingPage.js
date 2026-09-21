// Страница тарифов GramOS
const { PLANS, COMPARISON_TABLE, PRICING_FAQ } = require('../../data/plans');
const { checks, faq, ctaBand } = require('../components');

function fmt(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function renderPricingCardsFull() {
  return `<div class="price-grid">${PLANS.map(p => `
    <div class="plan rv ${p.hot ? 'hot' : ''}">
      ${p.hot ? '<span class="badge" style="align-self:flex-start;margin-bottom:10px;color:var(--accent);border-color:color-mix(in srgb,var(--accent) 40%,transparent)">Популярный</span>' : ''}
      <h3 style="margin-bottom:.15em">${p.name}</h3>
      <p class="small muted" style="min-height:42px">${p.desc}</p>
      <div class="amount">₽${fmt(p.m)} <span>/ мес</span></div>
      <p class="tiny muted" style="margin:6px 0 0">при помесячной оплате</p>
      <a class="btn ${p.hot ? 'btn-primary' : 'btn-ghost'}" href="/demo/">Попробовать 14 дней</a>
      ${checks(p.f)}
      <p class="tiny muted" style="margin-top:14px">* в рамках лимитов Telegram и правил честного использования платформы</p>
    </div>
  `).join('')}</div>`;
}

function renderPricingPage() {
  return `
  <section class="hero">
    <div class="wrap center">
      <div class="eyebrow">Тарифы</div>
      <h1>Прозрачная подписка, без комиссии с ваших продаж</h1>
      <p class="lede center">14 дней бесплатно на любом тарифе. Без привязки карты. Деньги от клиентов идут напрямую через вашего платёжного провайдера.</p>
      <div style="margin:30px 0 8px" class="toggle" id="billToggle">
        <button class="on" data-y="0">Помесячно</button>
        <button data-y="1">За год −20%</button>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="wrap">
      <div id="planHolder">
        ${renderPricingCardsFull()}
      </div>
    </div>
  </section>

  <!-- COMPARISON TABLE -->
  <section class="section soft">
    <div class="wrap">
      <div class="center" style="margin-bottom:34px">
        <h2>Сравнение тарифов</h2>
        <p class="lede center">Все тарифы включают CRM, сценарии, checkout и личный кабинет покупателя.</p>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Возможность</th>
              <th>Starter</th>
              <th>Growth</th>
              <th>Agency</th>
            </tr>
          </thead>
          <tbody>
            ${COMPARISON_TABLE.map(r => `
              <tr>
                <td>${r[0]}</td>
                <td>${r[1]}</td>
                <td>${r[2]}</td>
                <td>${r[3]}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <p class="tiny muted" style="margin-top:14px">
        Нужны индивидуальные лимиты, приватное развёртывание на отдельном сервере или оплата по безналичному расчету? 
        <a class="btn-link" href="/contact/">Напишите нам</a> — подготовим персональное предложение.
      </p>
    </div>
  </section>

  <!-- FAQ -->
  <section class="section">
    <div class="wrap" style="max-width:820px">
      <div class="center" style="margin-bottom:32px">
        <h2>FAQ по тарифам и оплате</h2>
      </div>
      ${faq(PRICING_FAQ)}
    </div>
  </section>

  ${ctaBand('Попробуйте GramOS бесплатно 14 дней', 'Полный доступ ко всем возможностям тарифа Growth. Банковская карта не требуется.')}
  `;
}

module.exports = { renderPricingPage };
