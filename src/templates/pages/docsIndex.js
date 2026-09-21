// Каталог документации GramOS
const { DOC_GROUPS, DOCS } = require('../../data/docs');
const { crumbs } = require('../components');

function renderDocsIndex() {
  return `
  <section class="section">
    <div class="wrap">
      ${crumbs([['Главная', '/'], ['Документация', '']])}
      <h1>Документация платформы GramOS</h1>
      <p class="lede">Как подключить бота, настроить платежи, собрать сценарий и поставить виджет. Начните с раздела «Начало работы».</p>
      
      <div class="grid g2" style="margin-top:36px">
        ${DOC_GROUPS.map(g => `
          <div class="card rv">
            <h3>${g.g}</h3>
            <div style="margin-top:10px">
              ${g.items.map(k => `
                <p style="margin:0 0 12px">
                  <a class="btn-link" href="/docs/${k}/">${DOCS[k].t}</a><br>
                  <span class="tiny muted">${DOCS[k].d}</span>
                </p>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      
      <div class="callout" style="margin-top:28px">
        Не нашли ответ на свой вопрос? Напишите в нашу службу поддержки через 
        <a class="btn-link" href="/contact/">форму контактов</a> — оперативно ответим в рабочие часы.
      </div>
    </div>
  </section>
  `;
}

module.exports = { renderDocsIndex };
