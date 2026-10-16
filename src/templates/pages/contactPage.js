// Страница контактов GramOS — Telegram-First Contact Hub (Zero Web-Forms)
const { crumbs, ctaBand } = require('../components');
const { icon } = require('../../data/icons');
const siteConfig = require('../../data/site');

function renderContactPage() {
  return `
  <section class="hero">
    <div class="wrap center">
      ${crumbs([['Главная', '/'], ['Контакты', '']])}
      <div class="eyebrow">Telegram Contact Hub</div>
      <h1>Свяжитесь с нами без ожидания</h1>
      <p class="lede center" style="max-width:680px;margin:0 auto">Никаких долгих веб-форм и ожидания ответа на e-mail. Общайтесь с нами напрямую в Telegram или через живой чат на сайте.</p>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="wrap">
      <div class="grid g2" style="gap:24px">
        <!-- 1. Telegram AI Bot -->
        <div class="card rv" style="padding:32px;display:flex;flex-direction:column;justify-content:space-between">
          <div>
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
              <div class="ico" style="margin:0">${icon('spark')}</div>
              <span class="badge" style="color:var(--accent);border-color:color-mix(in srgb,var(--accent) 40%,transparent)">Ответ за секунду • 24/7</span>
            </div>
            <h3 style="margin-bottom:10px">🤖 Бот GramOS с ИИ-ассистентом 24/7</h3>
            <p class="muted" style="margin-bottom:24px;font-size:0.95rem;line-height:1.55">Задайте любой вопрос по платформе, тарифам и воронкам. ИИ ответит мгновенно в любое время суток.</p>
          </div>
          <div>
            <a class="btn btn-primary" href="${siteConfig.contacts.botUrl}" target="_blank" rel="noopener" style="width:100%;justify-content:center">Написать в Telegram-бот →</a>
          </div>
        </div>

        <!-- 2. Founder & CEO -->
        <div class="card rv" style="padding:32px;display:flex;flex-direction:column;justify-content:space-between">
          <div>
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
              <div class="ico" style="margin:0">${icon('users')}</div>
              <span class="badge">Основатель</span>
            </div>
            <h3 style="margin-bottom:10px">👤 Ян Воронков, Основатель & CEO</h3>
            <p class="muted" style="margin-bottom:24px;font-size:0.95rem;line-height:1.55">Вопросы партнёрства, индивидуальные внедрения и стратегические консультации напрямую с создателем GramOS.</p>
          </div>
          <div>
            <a class="btn btn-ghost" href="${siteConfig.contacts.ceoTelegramUrl}" target="_blank" rel="noopener" style="width:100%;justify-content:center">Написать Яну в Telegram →</a>
          </div>
        </div>

        <!-- 3. Support -->
        <div class="card rv" style="padding:32px;display:flex;flex-direction:column;justify-content:space-between">
          <div>
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
              <div class="ico" style="margin:0">${icon('chat')}</div>
              <span class="badge">Поддержка</span>
            </div>
            <h3 style="margin-bottom:10px">💬 Служба заботы и поддержки</h3>
            <p class="muted" style="margin-bottom:24px;font-size:0.95rem;line-height:1.55">Помощь с настройкой сценариев, переносом базы и техническими вопросами.</p>
          </div>
          <div>
            <a class="btn btn-ghost" href="${siteConfig.contacts.telegramUrl}" target="_blank" rel="noopener" style="width:100%;justify-content:center">Чат поддержки →</a>
          </div>
        </div>

        <!-- 4. Web Live Chat -->
        <div class="card rv" style="padding:32px;display:flex;flex-direction:column;justify-content:space-between">
          <div>
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
              <div class="ico" style="margin:0">${icon('globe')}</div>
              <span class="badge">Без перехода в мессенджер</span>
            </div>
            <h3 style="margin-bottom:10px">⚡ Чат прямо на сайте</h3>
            <p class="muted" style="margin-bottom:24px;font-size:0.95rem;line-height:1.55">Хотите задать вопрос прямо здесь? Нажмите на круглый значок виджета в правом нижнем углу экрана.</p>
          </div>
          <div>
            <button type="button" class="btn btn-ghost" onclick="if(window.GramOSWidget&&window.GramOSWidget.open){window.GramOSWidget.open()}" style="width:100%;justify-content:center">Открыть чат на сайте</button>
          </div>
        </div>
      </div>

      <!-- Additional direct contact info bar -->
      <div class="card rv" style="margin-top:28px;padding:22px 28px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px">
        <div>
          <span class="small muted">Официальный e-mail для документов и запросов:</span>
          <a class="btn-link" href="mailto:${siteConfig.contacts.email}" style="margin-left:8px;font-weight:600">${siteConfig.contacts.email}</a>
        </div>
        <div class="small muted">
          График команды: ${siteConfig.contacts.workHours}
        </div>
      </div>
    </div>
  </section>

  ${ctaBand('Готовы начать автоматизацию в Telegram?', '14 дней бесплатного доступа без привязки карты. Начните в браузере или в Telegram Mini App.')}
  `;
}

module.exports = { renderContactPage };
