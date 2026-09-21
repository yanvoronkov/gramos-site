// Компоненты верстки GramOS
const { icon } = require('../data/icons');

function card(o) {
  return `<div class="card rv">
    <div class="ico">${icon(o.i)}</div>
    <h3>${o.t}</h3>
    <p class="muted small">${o.d}</p>
    ${o.link ? `<p style="margin-top:auto;padding-top:12px"><a class="btn-link small" href="${o.link}">Подробнее →</a></p>` : ''}
  </div>`;
}

function linkCard(o) {
  return `<a class="card rv" href="${o.link}">
    <div class="ico">${icon(o.i)}</div>
    <h3>${o.t}</h3>
    <p class="muted small">${o.d}</p>
  </a>`;
}

function checks(arr) {
  return `<ul class="checks">${arr.map(x => `<li>${x}</li>`).join('')}</ul>`;
}

function faq(items) {
  if (!items || items.length === 0) return '';
  return items.map(f => `
    <details class="rv">
      <summary>${f.q}</summary>
      <div class="body"><p>${f.a}</p></div>
    </details>
  `).join('');
}

function crumbs(items) {
  if (!items || items.length === 0) return '';
  return `<div class="breadcrumb">${items.map((c, idx) => {
    return idx < items.length - 1 ? `<a href="${c[1]}">${c[0]}</a> / ` : `<span>${c[0]}</span>`;
  }).join('')}</div>`;
}

function ctaBand(title, text) {
  return `
  <section class="section" style="padding-top:20px;padding-bottom:20px;">
    <div class="wrap">
      <div class="cta-band rv">
        <h2>${title || 'Запустите Telegram-продажи без связки из десятка сервисов'}</h2>
        <p class="lede center" style="margin:0 auto 24px">${text || '14 дней бесплатно, без карты. Подключите бота и соберите первую воронку за вечер.'}</p>
        <div class="btns">
          <a class="btn btn-primary btn-lg" href="/demo/">Начать бесплатно</a>
          <a class="btn btn-ghost btn-lg" href="/contact/">Получить консультацию</a>
        </div>
      </div>
    </div>
  </section>`;
}

function pageHero(o) {
  return `
  <section class="hero">
    <div class="wrap">
      ${o.crumbs ? crumbs(o.crumbs) : ''}
      <div class="split">
        <div>
          ${o.eyebrow ? `<div class="eyebrow">${o.eyebrow}</div>` : ''}
          <h1>${o.title}</h1>
          <p class="lede">${o.lede}</p>
          <div class="btns" style="margin-top:26px">
            <a class="btn btn-primary btn-lg" href="/demo/">Начать бесплатно</a>
            <a class="btn btn-ghost btn-lg" href="${o.secondHref || '/contact/'}">${o.second || 'Получить демо'}</a>
          </div>
        </div>
        <div class="rv">${o.mock || ''}</div>
      </div>
    </div>
  </section>`;
}

module.exports = { card, linkCard, checks, faq, crumbs, ctaBand, pageHero };
