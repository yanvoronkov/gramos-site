// Шаблон отдельной статьи документации GramOS
const { DOC_GROUPS, DOCS } = require('../../data/docs');
const { crumbs } = require('../components');

function docsNav(active) {
  return `
  <nav class="doc-nav">
    ${DOC_GROUPS.map(g => `
      <h4>${g.g}</h4>
      ${g.items.map(k => `
        <a class="${k === active ? 'active' : ''}" href="/docs/${k}/">${DOCS[k].t}</a>
      `).join('')}
    `).join('')}
  </nav>`;
}

function renderDocPage(key) {
  const d = DOCS[key];
  return `
  <section class="section">
    <div class="wrap">
      <div class="docs-layout">
        ${docsNav(key)}
        <article class="prose">
          ${crumbs([['Главная', '/'], ['Документация', '/docs/'], [d.t, '']])}
          <h1 style="font-size:clamp(1.8rem,3.6vw,2.4rem)">${d.t}</h1>
          <p class="lede">${d.d}</p>
          ${d.body}
          <hr>
          <div class="btns">
            <a class="btn btn-primary" href="/demo/">Начать бесплатно</a>
            <a class="btn btn-ghost" href="/contact/">Задать вопрос</a>
          </div>
        </article>
      </div>
    </div>
  </section>
  `;
}

module.exports = { renderDocPage };
