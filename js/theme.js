// Simple theme manager: toggles html[data-theme] and persists
(function () {
  var STORAGE_KEY = 'nfc.theme';
  var root = document.documentElement;

  function applySaved() {
    try {
      var t = localStorage.getItem(STORAGE_KEY);
      if (t === 'dark') root.setAttribute('data-theme', 'dark');
      else root.removeAttribute('data-theme');
    } catch (e) {}
  }

  function toggleTheme() {
    var isDark = root.getAttribute('data-theme') === 'dark';
    if (isDark) {
      root.removeAttribute('data-theme');
      try { localStorage.setItem(STORAGE_KEY, 'light'); } catch (e) {}
    } else {
      root.setAttribute('data-theme', 'dark');
      try { localStorage.setItem(STORAGE_KEY, 'dark'); } catch (e) {}
    }
  }

  function ensureToggleButton() {
    if (document.getElementById('theme-toggle')) return;
    var btn = document.createElement('button');
    btn.id = 'theme-toggle';
    btn.title = 'Toggle theme';
    btn.setAttribute('aria-label', 'Toggle theme');
    btn.textContent = '🌓';
    btn.addEventListener('click', toggleTheme);
    document.body.appendChild(btn);
  }

  document.addEventListener('DOMContentLoaded', function () {
    applySaved();
    ensureToggleButton();
  });
})();

