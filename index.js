(function() {
  'use strict';

  const markup = `
    <div class="__modal-wrapper">
      <h1>Watch out!</h1>
      <div class="content">
        <p>Be careful. This is not the same page where you clicked the link [link_name]. The old url was [old_url] and now it's [new_url].</p>
        <p>It can be a phishing attempt, so you'd better leave the website. To understand more read these [two] [articles].</p>
        <button class="close">I understand. Close.</button>
      </div>
    </div>
  `;

  const potentialPhishingLinks = document.querySelectorAll('a[target="_blank"]:not([rel="noopener"])');
  potentialPhishingLinks.forEach(link => {
    link.addEventListener('click', observeUrlChanges);
  });

  function observeUrlChanges() {
    const originalUrl = location.href;
    const intervalId = setInterval(function() {
      const currentUrl = location.href;
      if (currentUrl !== originalUrl) {
        addModalMarkup();
        clearInterval(intervalId);
      }
    }, 200);
  }

  function addModalMarkup() {
    const modal = document.createElement('div');
    modal.innerHTML = markup;
    document.body.appendChild(modal);
    modal.querySelector('.close').addEventListener('click', closeModal);
  }

  function closeModal() {
    const modal = document.querySelector('.__modal-wrapper');
    modal.className += ' hidden';
  }
})();
