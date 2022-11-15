// Contact Form 7 submit event fire
document.addEventListener('wpcf7submit', function(event) {
  setTimeout(function() {
        jQuery('form.wpcf7-form').removeClass('sent');
        jQuery('form.wpcf7-form').removeClass('failed');
        jQuery('form.wpcf7-form').addClass('init');
  }, 1000);

}, false);
