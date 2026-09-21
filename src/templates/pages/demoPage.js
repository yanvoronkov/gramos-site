// Страница интерактивного демо и регистрации GramOS
const { MOCKS } = require('../../data/mocks');
const { checks } = require('../components');

const TOUR = [
  { k: 'crm', t: 'CRM и диалоги', d: 'Лид из бота, канала или сайта сразу становится карточкой с историей, тегами и суммой покупок.' },
  { k: 'flow', t: 'Сценарий', d: 'Триггер, сообщение, условие, задержка и выдача доступа — собираются мышкой на визуальном canvas.' },
  { k: 'pay', t: 'Checkout', d: 'Страница оплаты с тарифом и промокодом. После оплаты доступ выдаётся автоматически.' },
  { k: 'broadcast', t: 'Рассылка', d: 'Сегмент по тегам, выбор бота, планирование и отчёт по доставке и оплатам.' },
  { k: 'widget', t: 'Виджет на сайте', d: 'Чат на сайте переводит гостя в Telegram и склеивает историю в одной карточке.' },
  { k: 'analytics', t: 'Аналитика', d: 'Выручка, конверсия, топ-источники и статусы лидов обновляются сами.' }
];

function renderDemoPage() {
  return `
  <section class="hero">
    <div class="wrap center">
      <div class="eyebrow">Демо</div>
      <h1>Посмотрите GramOS за две минуты</h1>
      <p class="lede center">Кликабельный тур по интерфейсу: CRM, сценарии, checkout, рассылки, виджет и аналитика. Без регистрации.</p>
    </div>
  </section>

  <!-- INTERACTIVE TOUR TABS -->
  <section class="section" style="padding-top:0">
    <div class="wrap">
      <div class="tabs center" id="tourTabs" style="justify-content:center">
        ${TOUR.map((t, i) => `
          <button class="${i === 0 ? 'on' : ''}" data-i="${i}">${t.t}</button>
        `).join('')}
      </div>
      
      <div id="tourPanels">
        ${TOUR.map((t, i) => `
          <div class="tabpanel ${i === 0 ? 'on' : ''}" data-i="${i}">
            <div class="split">
              <div>
                <h2>${t.t}</h2>
                <p class="lede">${t.d}</p>
                <div class="btns" style="margin-top:20px">
                  <a class="btn btn-primary" href="/contact/">Запросить живое демо</a>
                </div>
              </div>
              <div>${MOCKS[t.k]}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- START FORM -->
  <section class="section soft">
    <div class="wrap">
      <div class="split">
        <div>
          <div class="eyebrow">Старт</div>
          <h2>Создайте аккаунт и подключите бота</h2>
          <p class="lede">Заполните форму — мы создадим аккаунт, пришлём доступ и поможем подключить первого бота и собрать стартовый сценарий.</p>
          ${checks([
            '14 дней бесплатно, без карты',
            'Помощь с подключением бота и платежей',
            'Шаблоны воронок под ваш тип продукта',
            'Перенос текущей базы контактов'
          ])}
        </div>
        
        <div class="card rv">
          <h3>Заявка на доступ</h3>
          <form class="form" data-form="signup">
            <div>
              <label for="s-name">Как к вам обращаться</label>
              <input id="s-name" name="name" required placeholder="Имя">
            </div>
            <div>
              <label for="s-tg">Telegram</label>
              <input id="s-tg" name="tg" required placeholder="@username">
            </div>
            <div>
              <label for="s-mail">E-mail</label>
              <input id="s-mail" type="email" name="email" required placeholder="you@company.com">
            </div>
            <div>
              <label for="s-type">Что продаёте</label>
              <select id="s-type" name="type">
                <option>Платный клуб или канал</option>
                <option>Онлайн-курсы</option>
                <option>Консультации и услуги</option>
                <option>Агентство / несколько клиентов</option>
                <option>Другое</option>
              </select>
            </div>
            <button class="btn btn-primary btn-lg" type="submit">Получить доступ</button>
            <p class="form-note">
              Нажимая кнопку, вы соглашаетесь с <a class="btn-link" href="/legal/terms/">условиями</a> и <a class="btn-link" href="/legal/privacy/">политикой конфиденциальности</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  `;
}

module.exports = { renderDemoPage };
