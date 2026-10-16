// Страница тарифов GramOS с интерактивным калькулятором Старт vs Бизнес
const {
  STARTER_PLAN,
  BUSINESS_PLAN,
  CONTACTS_STEPS,
  PERIODS,
  CURRENCIES,
  COMPARISON_TABLE,
  PRICING_FAQ
} = require('../../data/plans');
const { checks, faq, ctaBand } = require('../components');

function renderPricingCalculator({ compact = false } = {}) {
  return `
  <div class="calc-wrapper">
    <div class="calc-controls">
      <!-- Currency & Period Selectors -->
      <div class="calc-switchers">
        <div class="calc-switcher-row">
          <span class="calc-group-label">Валюта:</span>
          <div class="calc-pills" id="currPills">
            <button type="button" class="calc-pill active" data-curr="RUB">RUB (₽)</button>
            <button type="button" class="calc-pill" data-curr="BYN">BYN (Br)</button>
            <button type="button" class="calc-pill" data-curr="USD">USD ($)</button>
            <button type="button" class="calc-pill" data-curr="XTR">Stars (⭐)</button>
          </div>
        </div>

        <div class="calc-switcher-row">
          <span class="calc-group-label">Период:</span>
          <div class="calc-pills" id="periodPills">
            <button type="button" class="calc-pill active" data-period="1">1 мес</button>
            <button type="button" class="calc-pill" data-period="3">3 мес <span class="calc-pill-badge">−5%</span></button>
            <button type="button" class="calc-pill" data-period="6">6 мес <span class="calc-pill-badge">−10%</span></button>
            <button type="button" class="calc-pill" data-period="12">12 мес <span class="calc-pill-badge">Выгодно −20%</span></button>
          </div>
        </div>
      </div>

      <!-- Slider for Contacts -->
      <div class="calc-slider-box">
        <div class="calc-slider-header">
          <span class="calc-slider-title">Размер базы контактов в CRM:</span>
          <span class="calc-contacts-val" id="calcContactsVal">до 1 000 контактов</span>
        </div>
        <div class="calc-range-wrap">
          <input type="range" min="0" max="4" step="1" value="0" class="calc-range" aria-label="Размер базы контактов" style="--range-pct: 0%;">
        </div>
        <div class="calc-ticks">
          <span class="calc-tick active" data-idx="0">1 000</span>
          <span class="calc-tick" data-idx="1">5 000</span>
          <span class="calc-tick" data-idx="2">10 000</span>
          <span class="calc-tick" data-idx="3">25 000</span>
          <span class="calc-tick" data-idx="4">50 000</span>
        </div>
      </div>
    </div>

    <!-- Cards Grid -->
    <div class="pricing-calc-grid">
      <!-- Card: Старт -->
      <div class="calc-card rv">
        <span class="calc-card-badge neutral">${STARTER_PLAN.badge}</span>
        <div class="calc-card-header">
          <h3>${STARTER_PLAN.name}</h3>
          <p class="calc-card-desc">${STARTER_PLAN.desc}</p>
        </div>
        <div class="calc-price-area">
          <div class="calc-old-price" style="display:none"></div>
          <div class="calc-main-price">
            <span class="calc-starter-price">0 ₽</span>
            <span class="period-lbl">/ навсегда</span>
          </div>
          <div class="calc-total-note">Без привязки карты • 0% комиссии платформы</div>
        </div>
        <a class="btn btn-ghost" href="https://app.gramos.pro/auth?utm_source=site&utm_medium=desktop&utm_campaign=pricing_starter" data-smart-cta="pricing_starter" target="_blank" rel="noopener">Начать бесплатно</a>
        
        <div class="calc-features-title">Включено в «Старт»:</div>
        ${checks(STARTER_PLAN.features)}

        <div class="calc-limitations-title">Ограничения:</div>
        <ul class="calc-limits-list">
          ${STARTER_PLAN.limitations.map(lim => `<li><span class="cross">✕</span> <span>${lim}</span></li>`).join('')}
        </ul>
      </div>

      <!-- Card: Бизнес -->
      <div class="calc-card featured rv">
        <span class="calc-card-badge accent">${BUSINESS_PLAN.badge}</span>
        <div class="calc-card-header">
          <h3>${BUSINESS_PLAN.name}</h3>
          <p class="calc-card-desc">${BUSINESS_PLAN.desc}</p>
        </div>
        <div class="calc-price-area">
          <div class="calc-old-price" style="display:none">590 ₽</div>
          <div class="calc-main-price">
            <span class="calc-amount">590 ₽</span>
            <span class="calc-period-lbl period-lbl">/ мес</span>
          </div>
          <div class="calc-total-note">при помесячной оплате</div>
        </div>
        <a class="btn btn-primary" href="https://app.gramos.pro/auth?utm_source=site&utm_medium=desktop&utm_campaign=pricing_business" data-smart-cta="pricing_business" target="_blank" rel="noopener">Подключить Бизнес →</a>

        <div class="calc-features-title">Всё для масштабирования бизнеса:</div>
        ${checks(compact ? BUSINESS_PLAN.features.slice(0, 8) : BUSINESS_PLAN.features)}
        ${compact ? '<p class="tiny muted" style="margin-top:12px">+ ещё 5 Enterprise-возможностей</p>' : ''}
      </div>
    </div>
  </div>
  `;
}

function renderPricingPage() {
  return `
  <section class="hero">
    <div class="wrap center">
      <div class="eyebrow">Тарифы</div>
      <h1>Прозрачная подписка, без комиссии с ваших продаж</h1>
      <p class="lede center">Начните с бесплатного Founder Access или выберите тариф под размер вашей базы. 0% комиссии GramOS с ваших продаж — все деньги идут напрямую на ваш счёт.</p>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="wrap">
      ${renderPricingCalculator({ compact: false })}
    </div>
  </section>

  <!-- COMPARISON TABLE -->
  <section class="section soft">
    <div class="wrap">
      <div class="center" style="margin-bottom:34px">
        <h2>Сравнение тарифов платформы</h2>
        <p class="lede center">Детальное сопоставление возможностей бесплатного тарифа «Старт» и динамического тарифа «Бизнес».</p>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th style="width:40%">Возможность платформы</th>
              <th style="width:30%">Старт (0 ₽)</th>
              <th style="width:30%">Бизнес (от 590 ₽)</th>
            </tr>
          </thead>
          <tbody>
            ${COMPARISON_TABLE.map(r => `
              <tr>
                <td><strong>${r[0]}</strong></td>
                <td>${r[1]}</td>
                <td><span style="color:var(--accent);font-weight:600">${r[2]}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <p class="tiny muted" style="margin-top:16px;text-align:center">
        Нужна база свыше 50 000 контактов, выделенный сервер или индивидуальный договор с постоплатой?
        <a class="btn-link" href="/contact/">Свяжитесь с нами</a> — подготовим персональное VIP-решение.
      </p>
    </div>
  </section>

  <!-- FAQ -->
  <section class="section">
    <div class="wrap" style="max-width:820px">
      <div class="center" style="margin-bottom:32px">
        <h2>Частые вопросы по тарифам и оплате</h2>
      </div>
      ${faq(PRICING_FAQ)}
    </div>
  </section>

  ${ctaBand('Попробуйте GramOS бесплатно', 'Бессрочный тариф «Старт» до 300 контактов без привязки банковской карты. Запустите первую воронку уже сегодня.')}
  `;
}

module.exports = { renderPricingPage, renderPricingCalculator };
