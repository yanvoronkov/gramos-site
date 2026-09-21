/* =========================================================
   GramOS — Client-side Interactivity & State Management
   ========================================================= */
(function() {
  "use strict";

  /* ---------- Theme Management ---------- */
  var themeBtn = document.getElementById('themeBtn');
  var SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' ? SUN : MOON;
    }
    try {
      localStorage.setItem('gramos:theme', theme);
    } catch (e) {}
  }

  (function initTheme() {
    var saved = null;
    try {
      saved = localStorage.getItem('gramos:theme');
    } catch (e) {}
    if (!saved) {
      saved = (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) ? 'light' : 'dark';
    }
    applyTheme(saved);
  })();

  if (themeBtn) {
    themeBtn.addEventListener('click', function() {
      var current = document.documentElement.getAttribute('data-theme') || 'dark';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  /* ---------- Mobile Drawer ---------- */
  var drawer = document.getElementById('drawer');
  var burger = document.getElementById('burger');
  var drawerClose = document.getElementById('drawerClose');

  function closeDrawer() {
    if (drawer) drawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  function openDrawer() {
    if (drawer) drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  if (burger) burger.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawer) {
    drawer.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') closeDrawer();
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
