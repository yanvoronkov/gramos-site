// Шаблон страницы 404 Not Found
function render404Page() {
  return `
  <section class="section center">
    <div class="wrap" style="max-width:560px">
      <h1 style="font-size:5rem;margin-bottom:0" class="grad">404</h1>
      <h2>Страница не найдена</h2>
      <p class="lede center">Запрашиваемая страница перемещена или больше не существует. Воспользуйтесь навигацией или перейдите на главную страницу.</p>
      <div class="btns" style="margin-top:28px">
        <a class="btn btn-primary" href="/">На главную</a>
        <a class="btn btn-ghost" href="/docs/">Документация</a>
      </div>
    </div>
  </section>
  `;
}

module.exports = { render404Page };
