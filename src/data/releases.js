/**
 * Данные журнала релизов GramOS (Changelog)
 * Хронология версий платформы с подробным описанием ключевых изменений для бизнеса и технических специалистов.
 */
const RELEASES = [
  {
    "version": "1.2.0",
    "date": "23 сентября 2026",
    "isoDate": "2026-09-23",
    "badge": "Текущий релиз",
    "badgeClass": "ok",
    "title": "Обновление платформы GramOS v1.2.0",
    "summary": "В новой версии платформы v1.2.0 реализованы обновления автоворонок, рассылок и компонентов Telegram CRM, а также улучшения стабильности и отзывчивости интерфейса.",
    "changes": [
      {
        "title": "Сценарии и автоворонки",
        "tag": "feat",
        "items": [
          "unify automation card height to 2 lines and close inspector directly on back in canvas",
          "add reorderable list with GripVertical, swipe actions drawer and group canvas order sync",
          "set vertical node gap to 25px, remove cross-scenario edges and add jump button to action badge",
          "автовыравнивание карточек по фактическим размерам React Flow с зазором 50px"
        ]
      },
      {
        "title": "Массовые рассылки",
        "tag": "feat",
        "items": [
          "set project primary bot as default for broadcasts and reports"
        ]
      },
      {
        "title": "Стабильность и UX",
        "tag": "fix",
        "items": [
          "add Postgres service to CI and isolate release workflow from DB tests",
          "elevate dragged card z-index above swipe layers and forward SectionCard props",
          "eliminate collapse snap effect on drop by isolating transform transitions",
          "eliminate drop landing twitch with flushSync and prevent swipe button border bleed",
          "adopt container drag model, smooth drop landing and fix tab clicks",
          "remove extra blank lines in useReorderableList to comply with 400-line limit",
          "eliminate post-drop card jump, fix tab clicks and scroll overlap in reorderable lists",
          "resolve z-index stacking, drop jerkiness, and click triggering in reorderable lists",
          "resolve swipe interference with handleOnly reorder, move copy left of switch and grip right",
          "migrate contacts, folder tabs, gateways and product plans to unified swipe and reorder hooks",
          "вернуть стандартную рамку карточки и применить акцентную заливку плашек бота и групп",
          "вернуть белый фон стартовой карточки с оранжевой рамкой и обновить плашки бота/папок"
        ]
      },
      {
        "title": "Новые возможности",
        "tag": "feat",
        "items": [
          "display scenario cards as independent tiles and restore tab clicks",
          "lift and drag entire card via Pointer Events without handle ghosting",
          "adopt 50% threshold smooth shifts from universal DnD showcase",
          "accent highlight for dragged cards and smooth FLIP reorder animations"
        ]
      }
    ]
  },

  {
    version: '1.2.0',
    date: '23 сентября 2026',
    isoDate: '2026-09-23',
    badge: 'Стабильная', badgeClass: '',
    title: 'Групповой холст сценариев, расширенные фильтры рассылок и плавный drag-and-drop',
    summary: 'Масштабное обновление визуального редактора автоворонок: появился двухрежимный холст для обзора связей между сценариями, интеллектуальное автовыравнивание Dagre, оптимизированный drag-and-drop с анимацией FLIP и свайп-действиями на мобильных устройствах, а также привязка основного бота к массовым рассылкам.',
    changes: [
      {
        category: 'Сценарии и визуальный холст',
        tag: 'feat',
        items: [
          'Двухрежимный холст: возможность переключаться между детальным редактором одного сценария и общим обзорным групповым холстом связей всех сценариев проекта.',
          'Интеллектуальная авторастановка нод (Dagre): автоматическое выравнивание карточек по сетке с сохранением пользовательских координат.',
          'Улучшенный drag-and-drop: бесшовное перемещение карточек с порогом смещения 50% и плавной анимацией перестановок (FLIP).',
          'Мобильные свайп-действия: быстрые операции копирования, отключения и удаления карточек через свайп в интерфейсе.'
        ]
      },
      {
        category: 'Массовые рассылки',
        tag: 'feat',
        items: [
          'Основной бот по умолчанию: проект теперь автоматически подставляет главного бота в качестве отправителя при создании рассылок и отчётов.',
          'Расширенная матрица фильтрации: комбинации условий по тегам, купленным продуктам, датам активности и CRM-полям.',
          'Мгновенная оценка аудитории: точный предварительный расчёт числа получателей рассылки перед запуском.'
        ]
      },
      {
        category: 'Стабильность и UX',
        tag: 'fix',
        items: [
          'Устранены микроскачки карточек при сбросе (drop) за счет синхронизации рендера с flushSync.',
          'Оптимизирована изоляция z-index для модальных шторок инспектора и выпадающих меню.',
          'Исправлена синхронизация драфта группового канваса и предотвращены лишние повторные запросы к серверу.'
        ]
      }
    ]
  },
  {
    version: '1.1.0',
    date: '15 августа 2026',
    isoDate: '2026-08-15',
    badge: 'Стабильная',
    badgeClass: '',
    title: 'Векторная База знаний AI (RAG), UTM-кампании и интеграция Tribute',
    summary: 'Добавлены возможности корпоративного AI: загрузка документов с автоматической векторизацией для умных ответов бота в воронках, сквозное отслеживание источников трафика через UTM-метки и поддержка платежей через сервис Tribute.',
    changes: [
      {
        category: 'Искусственный интеллект и База знаний',
        tag: 'feat',
        items: [
          'Модуль «База знаний»: загрузка PDF, DOCX и текстовых документов с автоматической нарезкой на фрагменты (chunks) и векторизацией в pgvector.',
          'Нода «AI-ассистент» в сценариях: умный ответ бота на естественном языке строго по материалам базы знаний без выдумывания фактов.'
        ]
      },
      {
        category: 'Маркетинг и аналитика трафика',
        tag: 'feat',
        items: [
          'UTM-кампании: генерация коротких deep link ссылок для Telegram-ботов с передачей utm_source, medium, campaign.',
          'Фиксация источника перехода в карточке контакта и сквозная статистика окупаемости трафика.'
        ]
      },
      {
        category: 'Платежи и коммерция',
        tag: 'feat',
        items: [
          'Интеграция Tribute: приём платежей и регулярных подписок с автоматической выдачей прав в каналы.',
          'Автоматическая синхронизация официальных курсов валют Национального банка в реальном времени.',
          'Промокоды и гибкие скидки: поддержка скидок с ограничением по времени и числу активаций.'
        ]
      }
    ]
  },
  {
    version: '1.0.0',
    date: '1 июля 2026',
    isoDate: '2026-07-01',
    badge: 'Первый публичный релиз',
    badgeClass: '',
    title: 'Публичный запуск GramOS: операционная система для бизнеса в Telegram',
    summary: 'Первый стабильный релиз платформы, объединяющий CRM, визуальный конструктор автоворонок, мультивалютный приём платежей, автоматический контроль доступов, сегментированные рассылки и встраиваемый Web-виджет.',
    changes: [
      {
        category: 'CRM и управление базой',
        tag: 'feat',
        items: [
          'Единая карточка клиента с хронологией всех событий (сообщения, клики, заказы, платежи).',
          'Системные и пользовательские теги, заметки менеджеров и напоминания прямо в диалоге.'
        ]
      },
      {
        category: 'Конструктор сценариев',
        tag: 'feat',
        items: [
          'Визуальный drag-and-drop холст автоворонок на React Flow.',
          'Более 20 типов нод (сообщения с инлайн-кнопками, условия, задержки, вебхуки, вызов сценариев).',
          'Более 25 триггеров: первое сообщение, команды, платежи, вступление в группу, таймеры.'
        ]
      },
      {
        category: 'Платежи и автоматический доступ',
        tag: 'feat',
        items: [
          'Приём платежей через Telegram Stars, ЮKassa, bePaid и Stripe без комиссии со стороны платформы.',
          'Автоматическая выдача разовых инвайт-ссылок и автоматический отзыв доступа (kick) при окончании оплаченного периода.',
          'Личный кабинет покупателя в формате Telegram Mini App.'
        ]
      },
      {
        category: 'Web-виджет и командный доступ',
        tag: 'feat',
        items: [
          'Встраиваемый виджет для внешних сайтов с изолированным Shadow DOM и мгновенной связкой посетителя с его аккаунтом в Telegram.',
          'Командный доступ к проектам с разграничением ролей: Владелец, Администратор, Участник, Наблюдатель.'
        ]
      }
    ]
  }
];

module.exports = { RELEASES };
