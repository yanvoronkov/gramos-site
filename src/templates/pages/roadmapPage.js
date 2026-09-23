// Страница дорожной карты Roadmap GramOS
const { ROADMAP } = require('../../data/roadmap');
const { checks, ctaBand } = require('../components');

function col(title, badge, items) {
  return `
  <div class="card rv">
    <div style="margin-bottom:14px">${badge}</div>
    <h3>${title}</h3>
    ${checks(items)}
  </div>`;
}

function renderRoadmapPage() {
  return `
  <section class="hero">
    <div class="wrap center">
      <div class="eyebrow">Roadmap</div>
      <h1>Честный статус возможностей</h1>
      <p class="lede center">Мы не обещаем на сайте того, что ещё не работает. Здесь видно, что доступно сейчас, что в beta, а что в планах.</p>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="wrap">
      <div class="grid g3" style="align-items:start">
        ${col('Доступно сейчас', '<span class="badge ok">В релизе</span>', ROADMAP.now)}
        ${col('В beta', '<span class="badge beta">Beta</span>', ROADMAP.beta)}
        ${col('Скоро', '<span class="badge soon">В планах</span>', ROADMAP.soon)}
      </div>
      
      <div class="callout" style="margin-top:28px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px;">
        <div>
          <strong>Журнал изменений по версиям</strong>
          <div style="font-size:0.92rem; color:var(--muted); margin-top:4px;">
            История каждого обновления платформы с подробным списком новых функций и доработок доступна в нашем чейнджлоге.
          </div>
        </div>
        <a class="btn btn-ghost btn-sm" href="/releases/">Смотреть релизы →</a>
      </div>

      <div class="callout" style="margin-top:16px">
        Beta-функции доступны по запросу и могут меняться. Если какая-то из них критична для вашего запуска — 
        <a class="btn-link" href="/contact/">напишите нам</a>, мы подскажем сроки и подключим функцию в ваш аккаунт раньше.
      </div>
    </div>
  </section>

  ${ctaBand()}
  `;
}

module.exports = { renderRoadmapPage };
