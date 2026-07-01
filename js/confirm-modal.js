/* ============================================================
   Custom confirmation modal + "US residents only" banner.
   ADDED to this local copy (does NOT exist on the donor site).
   The user's choice is remembered in localStorage, so the modal
   is only shown once (not on every page navigation).
   ============================================================ */
(function () {
  var KEY = 'walleyeResidentConfirm';        // stored value: "yes" | "no"

  function getChoice() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function setChoice(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function init($) {
    if ($('#confirm-popup').length) return;
    var $html = $('html');

    // own overlay (independent of the site's existing .overlay handlers)
    $('body').append('<div id="confirm-overlay"></div>');

    // modal — no close "X": can only be dismissed via Yes / No
    $('body').append(
      '<div id="confirm-popup" class="confirm-popup" role="dialog" aria-modal="true" aria-labelledby="confirm-title">' +
        '<h4 id="confirm-title">Please confirm</h4>' +
        '<p>Are you a resident of the USA?</p>' +
        '<div class="confirm-actions">' +
          '<button type="button" class="confirm-btn confirm-yes">Yes</button>' +
          '<button type="button" class="confirm-btn confirm-no">No</button>' +
        '</div>' +
      '</div>'
    );

    function open()  {
      $('#confirm-popup, #confirm-overlay').stop(true, true).fadeIn('slow');
      $html.addClass('confirm-noscroll');            // lock page scroll while open
    }
    function close() {
      $('#confirm-popup, #confirm-overlay').stop(true, true).fadeOut('fast');
      $html.removeClass('confirm-noscroll');
    }

    // Yes -> remember + close.  No -> remember + close + banner.
    $(document).on('click', '#confirm-popup .confirm-yes', function (e) {
      e.preventDefault(); setChoice('yes'); close();
    });
    $(document).on('click', '#confirm-popup .confirm-no', function (e) {
      e.preventDefault(); setChoice('no'); close(); showBanner();
    });

    // ---- "US residents only" banner (for users who answered "No") ----
    function setBannerOffset() {
      var $b = $('#us-only-banner');
      if ($b.length) document.documentElement.style.setProperty('--us-banner-h', $b.outerHeight() + 'px');
    }
    function showBanner() {
      if ($('#us-only-banner').length) return;
      var $b = $(
        '<div id="us-only-banner" role="alert">' +
          '<div class="us-only-inner">' +
            '<span>Please note: Walleye Capital works exclusively with residents of the United States.</span>' +
            '<button type="button" class="us-only-close" aria-label="Dismiss">&times;</button>' +
          '</div>' +
        '</div>'
      );
      $('body').prepend($b);
      setBannerOffset();
      $html.addClass('has-us-banner');               // pushes the fixed header down (CSS)
      $b.find('.us-only-close').on('click', function () {
        $html.removeClass('has-us-banner');
        document.documentElement.style.removeProperty('--us-banner-h');
        $b.remove();
      });
    }
    $(window).on('resize', setBannerOffset);

    // ---- helpers exposed for testing from the console ----
    window.showConfirmModal = open;
    window.hideConfirmModal = close;
    window.showUsBanner = showBanner;
    window.resetConfirmModal = function () { try { localStorage.removeItem(KEY); } catch (e) {} location.reload(); };

    // ---- decide what to do based on the remembered choice ----
    var choice = getChoice();
    if (choice === 'yes') {
      /* already confirmed — show nothing */
    } else if (choice === 'no') {
      showBanner();                                  // remembered non-resident — keep the banner
    } else {
      setTimeout(open, 400);                         // not answered yet — ask
    }
  }

  (function ready(cb) {
    if (window.jQuery) { window.jQuery(function () { cb(window.jQuery); }); }
    else { setTimeout(function () { ready(cb); }, 50); }
  })(init);
})();
