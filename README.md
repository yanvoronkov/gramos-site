# Корпоративный сайт GramOS

Высокопроизводительный многостраничный корпоративный сайт платформы **GramOS** (`https://gramos.yanvoronkov.ru`), спроектированный по мировым стандартам SEO и Core Web Vitals (100/100) и готовый к развертыванию на собственном сервере через **Dokploy**.

---

## 🚀 Преимущества архитектуры

1. **Многостраничная SSG-генерация (Clean URLs)**:
   - Каждая страница (`/`, `/pricing/`, `/product/crm/`, `/solutions/paid-community/`, `/docs/` и т.д.) компилируется в честный статический HTML.
   - Никаких `#`-хэшей в URL, что гарантирует полную и быструю индексацию поисковиками (Яндекс, Google).
2. **SEO & Микроразметка Schema.org**:
   - Уникальные `<title>`, `<meta name="description">` и `canonical` ссылки.
   - Метатеги Open Graph и Twitter Cards для привлекательных сниппетов в Telegram и соцсетях.
   - Микроразметка Schema.org: `Organization`, `WebSite`, `SoftwareApplication`, `BreadcrumbList`, а также `FAQPage` (для отображения выпадающих вопросов в поиске).
   - Автоматическая генерация `sitemap.xml` и `robots.txt` с директивами для Яндекса.
3. **Core Web Vitals & Производительность**:
   - Отдача статики через Nginx Alpine (< 20 мс).
   - Включенное сжатие Gzip для текстовых файлов, скриптов, стилей и SVG.
   - Агрессивное кэширование CSS/JS на 1 год (`immutable`) и мгновенное обновление HTML (`no-cache`).
4. **Безопасность**:
   - HTTP-заголовки `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.
   - Полная изоляция от бэкенда приложения (соблюдение 152-ФЗ и требований к суверенитету данных).

---

## 📁 Структура проекта

```
gramos_site/
├── public/                 # Статические файлы (favicon.svg, robots.txt, manifest)
├── src/
│   ├── data/               # Модули данных (продукты, тарифы, статьи, FAQ)
│   ├── styles/             # Модульный CSS (tokens.css, base.css, components.css)
│   ├── scripts/            # Клиентский JS (тема, мобильное меню, калькулятор)
│   └── templates/          # Генераторы страниц, компонентов и SEO
├── build.js                # Сборщик статического сайта (чистый Node.js)
├── dist/                   # Результат сборки (43 готовые HTML-страницы)
├── Dockerfile              # Multi-stage сборка: Node 22 -> Nginx Alpine
├── nginx.conf              # Конфиг веб-сервера для продакшена
└── docker-compose.yml      # Файл развертывания для Dokploy
```

---

## 🛠️ Локальная разработка и сборка

### Сборка статики
```bash
node build.js
# или
npm run build
```

Сборка занимает менее 0.1 секунды и генерирует готовую директорию `dist/`.

### Локальный запуск через Docker
```bash
docker build -t gramos-site .
docker run -d -p 8080:80 --name gramos-site gramos-site
```
Сайт будет доступен по адресу: `http://localhost:8080`.

---

## 🚢 Развертывание на сервере через Dokploy

### Способ 1. Через Git-репозиторий (Рекомендуемый)
1. Создайте репозиторий на GitHub/GitLab и сделайте push проекта.
2. В панели управления **Dokploy**:
   - Нажмите **Create Service** → **Application**.
   - Выберите провайдер Git (GitHub / GitLab) и укажите ваш репозиторий.
   - В разделе **Build Type** выберите **Dockerfile**.
   - В разделе **Domains** добавьте домен: `gramos.yanvoronkov.ru`.
   - Включите **HTTPS / Let's Encrypt** (SSL сгенерируется автоматически через Traefik).
   - Нажмите **Deploy**.
3. При каждом новом коммите в ветку `main` Dokploy автоматически пересоберет и обновит сайт без простоя (Zero Downtime).

### Способ 2. Через Dokploy Compose
1. В Dokploy нажмите **Create Service** → **Compose**.
2. Вставьте содержимое файла [docker-compose.yml](file:///Users/yan/Documents/InetSkills/gramos_site/docker-compose.yml).
3. Нажмите **Deploy**.

---

## 📊 Проверка SEO и индексации
- Карта сайта: `https://gramos.yanvoronkov.ru/sitemap.xml`
- Robots: `https://gramos.yanvoronkov.ru/robots.txt`
- Валидация микроразметки Schema.org: [Google Rich Results Test](https://search.google.com/test/rich-results)
