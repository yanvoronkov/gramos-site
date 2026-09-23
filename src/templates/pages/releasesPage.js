// Страница журнала релизов (Changelog) платформы GramOS
const { RELEASES } = require('../../data/releases');
const { checks, ctaBand } = require('../components');
const { icon } = require('../../data/icons');

function renderTag(tag) {
  if (tag === 'feat') {
    return `<span class="badge ok" style="font-size:0.7rem;padding:2px 8px;margin-bottom:8px">Новое</span>`;
  }
  if (tag === 'fix') {
    return `<span class="badge" style="font-size:0.7rem;padding:2px 8px;margin-bottom:8px">Улучшения</span>`;
  }
  return '';
}

function renderReleaseCard(r) {
  const badgeHtml = r.badge
    ? `<span class="badge ${r.badgeClass || ''}">${r.badge}</span>`
    : '';

  const changesHtml = r.changes.map(ch => `
    <div style="margin-top:20px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
        ${renderTag(ch.tag)}
        <h4 style="margin:0;font-size:1.05rem;font-weight:700">${ch.category}</h4>
      </div>
      ${checks(ch.items)}
    </div>
  `).join('');

  return `
  <article class="card rv" id="v${r.version.replace(/\./g, '-')}" style="margin-bottom:32px;padding:32px">
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:12px;border-bottom:1px solid var(--border-soft);padding-bottom:16px">
      <div style="display:flex;align-items:center;gap:12px">
        <span style="font-family:monospace;font-size:1.4rem;font-weight:800;color:var(--text);letter-spacing:-0.02em">v${r.version}</span>
        ${badgeHtml}
      </div>
      <time datetime="${r.isoDate}" style="font-size:0.88rem;color:var(--muted);display:flex;align-items:center;gap:6px">
        ${icon('clock')}
        <span>${r.date}</span>
      </time>
    </div>

    <h3 style="font-size:1.35rem;margin-bottom:10px">${r.title}</h3>
    <p class="muted" style="font-size:0.98rem;line-height:1.6;margin-bottom:20px">${r.summary}</p>

    <div style="border-top:1px dashed var(--border-soft);padding-top:12px">
      ${changesHtml}
    </div>
  </article>
  `;
}

function renderReleasesPage() {
  return `
  <section class="hero">
    <div class="wrap center">
      <div class="eyebrow">Changelog</div>
      <h1>История обновлений GramOS</h1>
      <p class="lede center">
        Мы регулярно выпускаем обновления платформы, делая продажи и автоматизацию в Telegram удобнее, стабильнее и быстрее.
      </p>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="wrap" style="max-width:880px">
      <div style="margin-bottom:28px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px">
        <span class="muted small">Показаны релизы версии 1.x</span>
        <a class="btn-link small" href="/roadmap/">Посмотреть Roadmap развития →</a>
      </div>

      <div class="releases-feed">
        ${RELEASES.map(renderReleaseCard).join('')}
      </div>

      <div class="callout" style="margin-top:24px">
        Есть идея для новой функции или нашли неточность? 
        <a class="btn-link" href="/contact/">Напишите нашей команде</a> — мы учитываем обратную связь клиентов при планировании каждого спринта.
      </div>
    </div>
  </section>

  ${ctaBand('Хотите протестировать актуальную версию GramOS?', '14 дней бесплатного доступа ко всем возможностям платформы без привязки карты.')}
  `;
}

module.exports = { renderReleasesPage };
