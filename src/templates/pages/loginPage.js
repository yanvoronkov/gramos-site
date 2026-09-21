// Страница входа в веб-панель GramOS
const { icon } = require('../../data/icons');

function renderLoginPage() {
  return `
  <section class="section">
    <div class="wrap" style="max-width:460px">
      <div class="card rv" style="padding:32px">
        <h1 style="font-size:1.7rem">Вход в GramOS</h1>
        <p class="small muted">Войдите через Telegram или по e-mail, чтобы перейти в панель управления.</p>
        
        <a class="btn btn-primary btn-lg" style="width:100%;margin:18px 0 10px" href="/demo/">
          ${icon('send')} Войти через Telegram
        </a>
        
        <div style="display:flex;align-items:center;gap:12px;margin:16px 0">
          <hr style="flex:1;margin:0">
          <span class="tiny muted">или</span>
          <hr style="flex:1;margin:0">
        </div>
        
        <form class="form" data-form="login">
          <div>
            <label for="l-mail">E-mail</label>
            <input id="l-mail" type="email" name="email" required placeholder="you@company.com">
          </div>
          <div>
            <label for="l-pass">Пароль</label>
            <input id="l-pass" type="password" name="password" required placeholder="••••••••">
          </div>
          <button class="btn btn-ghost" type="submit">Войти по паролю</button>
        </form>
        
        <p class="tiny muted" style="margin-top:18px;text-align:center">
          Нет аккаунта? <a class="btn-link" href="/demo/">Начните бесплатно</a>
        </p>
      </div>
      
      <p class="tiny muted center" style="margin-top:18px">
        Корпоративный сайт GramOS: рабочая веб-панель запускается на поддомене app.gramos.ru.
      </p>
    </div>
  </section>
  `;
}

module.exports = { renderLoginPage };
