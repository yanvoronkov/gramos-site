// Страница контактов GramOS
const { crumbs } = require('../components');
const { icon } = require('../../data/icons');
const siteConfig = require('../../data/site');

function renderContactPage() {
  return `
  <section class="section">
    <div class="wrap">
      <div class="split">
        <div>
          ${crumbs([['Главная', '/'], ['Контакты', '']])}
          <div class="eyebrow">Контакты</div>
          <h1>Поговорим о вашем Telegram-бизнесе</h1>
          <p class="lede">Расскажите, что вы продаёте и как сейчас устроены продажи. Покажем, как это собирается в GramOS, и поможем с переносом.</p>
          
          <div class="grid" style="gap:12px;margin-top:28px;max-width:420px">
            <div class="card" style="padding:16px 20px;display:flex;gap:12px;align-items:center">
              <div class="ico" style="margin:0">${icon('send')}</div>
              <div>
                <b>Telegram</b><br>
                <span class="small muted"><a class="btn-link" href="${siteConfig.contacts.telegramUrl}">${siteConfig.contacts.telegram}</a> — быстрее всего</span>
              </div>
            </div>
            
            <div class="card" style="padding:16px 20px;display:flex;gap:12px;align-items:center">
              <div class="ico" style="margin:0">${icon('mail')}</div>
              <div>
                <b>E-mail</b><br>
                <span class="small muted"><a class="btn-link" href="mailto:${siteConfig.contacts.email}">${siteConfig.contacts.email}</a></span>
              </div>
            </div>
            
            <div class="card" style="padding:16px 20px;display:flex;gap:12px;align-items:center">
              <div class="ico" style="margin:0">${icon('book')}</div>
              <div>
                <b>Документация</b><br>
                <span class="small muted"><a class="btn-link" href="/docs/">Ответы на технические вопросы</a></span>
              </div>
            </div>
          </div>
          
          <p class="tiny muted" style="margin-top:22px">
            Отвечаем в рабочие дни с 10:00 до 19:00 (МСК). Заявки на демонстрацию обрабатываем в течение рабочего дня.
          </p>
        </div>
        
        <div class="card rv">
          <h3>Оставьте заявку</h3>
          <p class="small muted">Ответим в Telegram или на почту — как вам удобнее.</p>
          <form class="form" data-form="contact" style="margin-top:16px">
            <div>
              <label for="c-name">Имя</label>
              <input id="c-name" name="name" required placeholder="Как к вам обращаться">
            </div>
            <div>
              <label for="c-contact">Telegram или e-mail</label>
              <input id="c-contact" name="contact" required placeholder="@username или you@mail.com">
            </div>
            <div>
              <label for="c-topic">Тема</label>
              <select id="c-topic" name="topic">
                <option>Демо и запуск</option>
                <option>Вопрос по тарифам</option>
                <option>Техническая поддержка</option>
                <option>Партнёрство</option>
                <option>Другое</option>
              </select>
            </div>
            <div>
              <label for="c-msg">Сообщение</label>
              <textarea id="c-msg" name="message" placeholder="Что продаёте, сколько контактов в базе, какие задачи хотите решить"></textarea>
            </div>
            <button class="btn btn-primary btn-lg" type="submit">Отправить заявку</button>
            <p class="form-note">
              Отправляя форму, вы соглашаетесь с <a class="btn-link" href="/legal/privacy/">политикой конфиденциальности</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  `;
}

module.exports = { renderContactPage };
