// Каталог статей блога GramOS
const { POSTS } = require('../../data/blog');
const { crumbs, ctaBand } = require('../components');

function renderBlogIndex() {
  const keys = Object.keys(POSTS);
  return `
  <section class="section">
    <div class="wrap">
      ${crumbs([['Главная', '/'], ['Блог', '']])}
      <h1>Блог и практические гайды</h1>
      <p class="lede">Практика Telegram-продаж: воронки, монетизация каналов, сегментация базы и процессы клиентской поддержки.</p>
      
      <div class="grid g2" style="margin-top:36px">
        ${keys.map(k => {
          const p = POSTS[k];
          return `
          <a class="card rv" href="/blog/${k}/">
            <div style="display:flex;gap:10px;align-items:center;margin-bottom:12px">
              <span class="badge">${p.tag}</span>
              <span class="tiny muted">${p.date} · ${p.read}</span>
            </div>
            <h3>${p.t}</h3>
            <p class="muted small">${p.ex}</p>
            <p style="margin:12px 0 0"><span class="btn-link small">Читать статью →</span></p>
          </a>`;
        }).join('')}
      </div>
    </div>
  </section>

  ${ctaBand('Попробуйте применить это в своём Telegram', 'Соберите первую продающую автоворонку в GramOS за вечер — бесплатно 14 дней.')}
  `;
}

module.exports = { renderBlogIndex };
