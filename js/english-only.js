/* ============================================================
   Restrict the contact-form fields to English (Latin / ASCII)
   input only — filters typing AND pasting in real time.
   Non-English characters (Cyrillic, accented letters, emoji, …)
   are silently dropped and a brief hint is shown.
   ============================================================ */
(function () {
  // keep only ASCII printable chars (space … ~); textareas also keep newlines/tabs
  function clean(value, multiline) {
    var re = multiline ? /[^\x20-\x7E\n\r\t]/g : /[^\x20-\x7E]/g;
    return value.replace(re, '');
  }

  function attach() {
    var forms = document.querySelectorAll('.contact-form');
    if (!forms.length) return false;

    forms.forEach(function (form) {
      // one small hint per form, hidden until a non-English char is blocked
      var hint = document.createElement('p');
      hint.className = 'en-only-hint';
      hint.setAttribute('aria-live', 'polite');
      hint.textContent = 'Please use English (Latin) characters only.';
      form.appendChild(hint);
      form._enHint = hint;

      form.querySelectorAll('input, textarea').forEach(function (el) {
        if (el.type === 'hidden' || el.type === 'submit' || el.type === 'button') return;
        var multiline = el.tagName === 'TEXTAREA';
        el.setAttribute('lang', 'en');
        el.addEventListener('input', function () {
          var start = el.selectionStart, end = el.selectionEnd;
          var before = el.value;
          var after = clean(before, multiline);
          if (after !== before) {
            var removed = before.length - after.length;
            el.value = after;
            try { el.setSelectionRange(Math.max(0, start - removed), Math.max(0, end - removed)); } catch (e) {}
            showHint(form);
          }
        });
      });
    });
    return true;
  }

  function showHint(form) {
    var h = form._enHint;
    if (!h) return;
    h.classList.add('show');
    clearTimeout(form._enTimer);
    form._enTimer = setTimeout(function () { h.classList.remove('show'); }, 1800);
  }

  if (document.readyState !== 'loading') attach();
  else document.addEventListener('DOMContentLoaded', attach);
})();
