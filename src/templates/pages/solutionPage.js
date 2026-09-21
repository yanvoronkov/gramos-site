// Шаблон отдельной страницы отраслевого решения
const { checks, faq, ctaBand, pageHero } = require('../components');
const { icon } = require('../../data/icons');

function renderSolutionPage(s) {
  return `
  ${pageHero({
    crumbs: [['Главная', '/'], ['Решения', '/solutions/'], [s.crumb, '']],
    eyebrow: s.eyebrow,
    title: s.title,
    lede: s.lede,
    mock: s.mock
  })}

  <!-- PAINS & METRICS -->
  <section class="section soft">
    <div class="wrap">
      <div class="split">
        <div>
          <div class="eyebrow">Знакомо?</div>
          <h2>Что обычно мешает масштабированию</h2>
          ${checks(s.pains)}
        </div>
        <div>
          <div class="grid" style="gap:14px">
            ${s.metrics.map(m => `
              <div class="card rv" style="display:flex;justify-content:space-between;align-items:center;gap:14px;padding:18px 22px">
                <span class="muted small">${m[0]}</span>
                <b style="font-family:Manrope">${m[1]}</b>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- STEPS CONFIG -->
  <section class="section">
    <div class="wrap">
      <div class="center" style="max-width:700px;margin:0 auto 42px">
        <div class="eyebrow">Как собрать</div>
        <h2>Конфигурация GramOS под этот сценарий</h2>
      </div>
      <div class="grid g2" style="max-width:880px;margin:0 auto">
        ${s.steps.map((st, i) => `
          <div class="card rv">
            <div class="ico">${icon(['bolt', 'card', 'flow', 'send'][i] || 'spark')}</div>
            <h3>${st.t}</h3>
            <p class="muted small">${st.d}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- FAQ -->
  ${s.faq && s.faq.length > 0 ? `
  <section class="section soft">
    <div class="wrap" style="max-width:820px">
      <div class="center" style="margin-bottom:32px">
        <h2>Вопросы по сценарию</h2>
      </div>
      ${faq(s.faq)}
    </div>
  </section>` : ''}

  ${ctaBand('Соберём этот сценарий вместе', 'Покажем, как настроить GramOS под вашу модель продаж, и поможем перенести текущих клиентов.')}
  `;
}

module.exports = { renderSolutionPage };
