// Страница интеграций GramOS
const { INTEGRATIONS } = require('../../data/integrations');
const { icon } = require('../../data/icons');
const { ctaBand } = require('../components');

function statusBadge(s) {
  if (s === 'ok') return '<span class="badge ok">Доступно</span>';
  if (s === 'beta') return '<span class="badge beta">Beta</span>';
  return '<span class="badge soon">Скоро</span>';
}

function renderIntegrationsPage() {
  return `
  <section class="hero">
    <div class="wrap center">
      <div class="eyebrow">Интеграции</div>
      <h1>С чем GramOS работает</h1>
      <p class="lede center">Платёжные провайдеры, Telegram-платформа, ваш сайт и внешние системы через webhooks.</p>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="wrap">
      <div class="grid g3">
        ${INTEGRATIONS.map(x => `
          <div class="card rv">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px">
              <div class="ico">${icon(x.i)}</div>
              ${statusBadge(x.s)}
            </div>
            <h3>${x.t}</h3>
            <p class="muted small">${x.d}</p>
          </div>
        `).join('')}
      </div>
      
      <div class="callout" style="margin-top:28px">
        Статусы отражают текущий релиз и обновляются вместе с <a class="btn-link" href="/roadmap/">Roadmap</a>. 
        Нужной интеграции нет в списке? <a class="btn-link" href="/contact/">Расскажите</a> — мы учитываем запросы пользователей при планировании обновлений.
      </div>
    </div>
  </section>

  ${ctaBand()}
  `;
}

module.exports = { renderIntegrationsPage };
