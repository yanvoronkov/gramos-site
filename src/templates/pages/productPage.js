// Шаблон отдельной продуктовой страницы GramOS
const { card, linkCard, faq, ctaBand, pageHero } = require('../components');

function renderProductPage(p) {
  return `
  ${pageHero({
    crumbs: [['Главная', '/'], ['Продукт', '/product/'], [p.crumb, '']],
    eyebrow: p.eyebrow,
    title: p.title,
    lede: p.lede,
    mock: p.mock,
    second: 'Посмотреть демо',
    secondHref: '/demo/'
  })}

  <!-- FEATURES -->
  <section class="section soft">
    <div class="wrap">
      <div class="center" style="max-width:700px;margin:0 auto 42px">
        <h2>${p.featuresTitle}</h2>
        ${p.featuresLede ? `<p class="lede center">${p.featuresLede}</p>` : ''}
      </div>
      <div class="grid g3">
        ${p.features.map(card).join('')}
      </div>
    </div>
  </section>

  <!-- USE SCENARIO -->
  <section class="section">
    <div class="wrap">
      <div class="split">
        <div>
          <div class="eyebrow">Сценарий</div>
          <h2>${p.useTitle}</h2>
          <p class="lede">${p.useLede}</p>
          <div class="steps" style="margin-top:26px">
            ${p.steps.map(s => `
              <div class="step rv">
                <h3>${s.t}</h3>
                <p>${s.d}</p>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="rv">${p.mock2 || p.mock}</div>
      </div>
    </div>
  </section>

  <!-- RELATED MODULES -->
  ${p.related ? `
  <section class="section soft">
    <div class="wrap">
      <div class="center" style="margin-bottom:34px">
        <h2>Работает вместе с</h2>
      </div>
      <div class="grid g3">
        ${p.related.map(linkCard).join('')}
      </div>
    </div>
  </section>` : ''}

  <!-- FAQ -->
  ${p.faq && p.faq.length > 0 ? `
  <section class="section">
    <div class="wrap" style="max-width:820px">
      <div class="center" style="margin-bottom:32px">
        <h2>Вопросы по модулю</h2>
      </div>
      ${faq(p.faq)}
    </div>
  </section>` : ''}

  ${ctaBand(`Начните работу с модулем «${p.crumb}»`, 'Подключите Telegram-бота и запустите модуль за 15 минут. 14 дней бесплатно, без привязки карты.')}
  `;
}

module.exports = { renderProductPage };
