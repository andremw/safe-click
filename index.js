(function() {
  'use strict';

  const potentialPhishingLinks = document.querySelectorAll('a[target="_blank"]:not([rel="noopener"])');
  potentialPhishingLinks.forEach(link => {
    link.setAttribute('rel', 'noopener');
  });
})();
