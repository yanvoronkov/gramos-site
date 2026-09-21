// Шаблон отдельной статьи блога GramOS
const { POSTS } = require('../../data/blog');
const { crumbs } = require('../components');

function renderPostPage(key) {
  const p = POSTS[key];
  const others = Object.keys(POSTS).filter(k => k !== key).slice(0, 3);

  return `
  <section class="section">
    <div class="wrap" style="max-width:780px">
      ${crumbs([['Главная', '/'], ['Блог', '/blog/'], [p.tag, '']])}
      
      <div style="display:flex;gap:10px;align-items:center;margin-bottom:14px">
        <span class="badge">${p.tag}</span>
        <span class="tiny muted">${p.date} · ${p.read}</span>
      </div>
      
      <h1 style="font-size:clamp(1.9rem,4vw,2.7rem)">${p.t}</h1>
      <p class="lede">${p.ex}</p>
      
      <div class="prose" style="max-width:none">
        ${p.body}
      </div>
      
      <div class="cta-band" style="margin-top:40px">
        <h3 style="font-size:1.35rem">Внедрите это в своём проекте на GramOS</h3>
        <p class="muted small" style="max-width:52ch;margin:0 auto 18px">
          CRM, сценарии, автооплаты и доступы в одном закрытом контуре. 14 дней бесплатно.
        </p>
        <div class="btns">
          <a class="btn btn-primary" href="/demo/">Начать бесплатно</a>
        </div>
      </div>
      
      <h3 style="margin-top:48px">Читайте также</h3>
      <div class="grid" style="gap:12px">
        ${others.map(k => `
          <a class="card rv" href="/blog/${k}/" style="padding:16px 20px">
            <b>${POSTS[k].t}</b><br>
            <span class="tiny muted">${POSTS[k].date} · ${POSTS[k].read}</span>
          </a>
        `).join('')}
      </div>
    </div>
  </section>
  `;
}

module.exports = { renderPostPage };
