/* =========================================================
   GramOS — Client-side Interactivity & State Management
   ========================================================= */
(function() {
  "use strict";

  /* ---------- Theme Management (Light / Dark / System) ---------- */
  var themeBtn = document.getElementById('themeBtn');

  var THEME_ICONS = {
    sun: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/></svg>',
    moon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>',
    monitor: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>'
  };

  var PREF_CYCLE = {
    'light': 'dark',
    'dark': 'system',
    'system': 'light'
  };

  function getEffectiveTheme(preference) {
    if (preference === 'light' || preference === 'dark') return preference;
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }

  function applyTheme(preference, save) {
    if (save === undefined) save = true;
    var effective = getEffectiveTheme(preference);
    document.documentElement.setAttribute('data-theme', effective);
    document.documentElement.setAttribute('data-theme-preference', preference);

    // Update main theme button icon & tooltip
    if (themeBtn) {
      if (preference === 'system') {
        themeBtn.innerHTML = THEME_ICONS.monitor;
        themeBtn.setAttribute('title', 'Тема: Системная (' + (effective === 'dark' ? 'тёмная' : 'светлая') + ') — кликните для переключения');
        themeBtn.setAttribute('aria-label', 'Тема оформления: системная. Кликните для переключения.');
      } else if (preference === 'light') {
        themeBtn.innerHTML = THEME_ICONS.sun;
        themeBtn.setAttribute('title', 'Тема: Светлая — кликните для переключения');
        themeBtn.setAttribute('aria-label', 'Тема оформления: светлая. Кликните для переключения.');
      } else {
        themeBtn.innerHTML = THEME_ICONS.moon;
        themeBtn.setAttribute('title', 'Тема: Тёмная — кликните для переключения');
        themeBtn.setAttribute('aria-label', 'Тема оформления: тёмная. Кликните для переключения.');
      }
    }

    // Update active states in drawer segmented controls
    [].forEach.call(document.querySelectorAll('[data-theme-val]'), function(el) {
      var val = el.getAttribute('data-theme-val');
      el.classList.toggle('active', val === preference);
      el.setAttribute('aria-pressed', val === preference ? 'true' : 'false');
    });

    if (save) {
      try {
        localStorage.setItem('gramos:theme', preference);
      } catch (e) {}
    }
  }

  function initTheme() {
    var saved = null;
    try {
      saved = localStorage.getItem('gramos:theme');
    } catch (e) {}
    if (!saved || (saved !== 'light' && saved !== 'dark' && saved !== 'system')) {
      saved = 'system';
    }
    applyTheme(saved, false);

    // Listen to OS color-scheme updates dynamically
    if (window.matchMedia) {
      var mql = window.matchMedia('(prefers-color-scheme: dark)');
      var onSystemChange = function() {
        var currentPref = document.documentElement.getAttribute('data-theme-preference') || 'system';
        if (currentPref === 'system') {
          applyTheme('system', false);
        }
      };
      if (mql.addEventListener) {
        mql.addEventListener('change', onSystemChange);
      } else if (mql.addListener) {
        mql.addListener(onSystemChange);
      }
    }
  }

  initTheme();

  // Desktop Header Theme Button: cycle through Light -> Dark -> System
  if (themeBtn) {
    themeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      var currentPref = document.documentElement.getAttribute('data-theme-preference') || 'system';
      var nextPref = PREF_CYCLE[currentPref] || 'light';
      applyTheme(nextPref, true);
    });
  }

  // Handle clicks on drawer segmented control buttons
  document.addEventListener('click', function(e) {
    var opt = e.target.closest('[data-theme-val]');
    if (!opt) return;
    var targetPref = opt.getAttribute('data-theme-val');
    if (targetPref) {
      applyTheme(targetPref, true);
    }
  });

  /* ---------- Mobile Drawer & Backdrop ---------- */
  var drawer = document.getElementById('drawer');
  var drawerBackdrop = document.getElementById('drawerBackdrop');
  var burger = document.getElementById('burger');
  var drawerClose = document.getElementById('drawerClose');

  function closeDrawer() {
    if (drawer) drawer.classList.remove('open');
    if (drawerBackdrop) drawerBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  function openDrawer() {
    if (drawer) drawer.classList.add('open');
    if (drawerBackdrop) drawerBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  if (burger) burger.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);
  if (drawer) {
    drawer.addEventListener('click', function(e) {
      if (e.target.closest('a')) closeDrawer();
    });
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeDrawer();
  });

  /* ---------- Scroll Reveal Animations ---------- */
  function initReveal() {
    var els = document.querySelectorAll('.rv');
    if (!('IntersectionObserver' in window)) {
      [].forEach.call(els, function(e) { e.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    [].forEach.call(els, function(e, i) {
      e.style.transitionDelay = Math.min(i % 6, 5) * 45 + 'ms';
      io.observe(e);
    });
  }

  /* ---------- Pricing Annual / Monthly Switcher ---------- */
  function initPricingToggle() {
    var tg = document.getElementById('billToggle');
    if (!tg) return;

    var plans = [
      { name: 'Starter', m: 990, y: 790 },
      { name: 'Growth', m: 2900, y: 2320 },
      { name: 'Agency', m: 7900, y: 6320 }
    ];

    function fmt(n) {
      return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }

    tg.addEventListener('click', function(e) {
      var b = e.target.closest('button');
      if (!b) return;
      [].forEach.call(tg.querySelectorAll('button'), function(x) { x.classList.remove('on'); });
      b.classList.add('on');
      var isYearly = b.getAttribute('data-y') === '1';

      var planEls = document.querySelectorAll('.plan');
      [].forEach.call(planEls, function(planEl, idx) {
        if (plans[idx]) {
          var priceEl = planEl.querySelector('.amount');
          var noteEl = planEl.querySelector('.tiny.muted');
          var price = isYearly ? plans[idx].y : plans[idx].m;
          if (priceEl) priceEl.innerHTML = '₽' + fmt(price) + ' <span>/ мес</span>';
          if (noteEl) noteEl.textContent = isYearly ? 'при оплате за год, экономия 20%' : 'при помесячной оплате';
        }
      });
    });
  }

  /* ---------- Demo Tour Tab Switcher ---------- */
  function initTourTabs() {
    var tt = document.getElementById('tourTabs');
    if (!tt) return;

    tt.addEventListener('click', function(e) {
      var b = e.target.closest('button');
      if (!b) return;
      var i = b.getAttribute('data-i');
      [].forEach.call(tt.querySelectorAll('button'), function(x) { x.classList.remove('on'); });
      b.classList.add('on');
      [].forEach.call(document.querySelectorAll('#tourPanels .tabpanel'), function(p) {
        p.classList.toggle('on', p.getAttribute('data-i') === i);
      });
    });
  }

  /* ---------- Lead & Contact Forms ---------- */
  function initForms() {
    [].forEach.call(document.querySelectorAll('form[data-form]'), function(f) {
      f.addEventListener('submit', function(e) {
        e.preventDefault();
        var kind = f.getAttribute('data-form');
        var data = {};
        [].forEach.call(f.elements, function(el) {
          if (el.name) data[el.name] = el.value;
        });
        data.ts = new Date().toISOString();
        data.kind = kind;

        try {
          var key = 'gramos:leads';
          var all = JSON.parse(localStorage.getItem(key) || '[]');
          all.push(data);
          localStorage.setItem(key, JSON.stringify(all.slice(-50)));
        } catch (err) {}

        var ok = document.createElement('div');
        ok.className = 'notice';
        ok.innerHTML = kind === 'login'
          ? 'Демо-режим: вход не подключён. Чтобы получить доступ, оставьте заявку на странице «Начать бесплатно».'
          : 'Спасибо! Заявка принята. Мы свяжемся с вами в течение рабочего дня.<br><span class="tiny">Данные сохранены локально. При необходимости форму можно переключить на ваш Telegram-бот или API.</span>';
        f.parentNode.replaceChild(ok, f);
      });
    });
  }

  /* ---------- Initialize on DOM Ready ---------- */
  document.addEventListener('DOMContentLoaded', function() {
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    initReveal();
    initPricingToggle();
    initTourTabs();
    initForms();
  });
})();
