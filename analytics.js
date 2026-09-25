// Google Analytics 4 loader. Set the Measurement ID once here; every page includes this file.
(function () {
  var GA_ID = 'G-XXXXXXXXXX';
  if (GA_ID.indexOf('XXXX') !== -1) return;
  if (location.hostname !== 'www.tensor7.ai' && location.hostname !== 'tensor7.ai') return;

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true });
})();
