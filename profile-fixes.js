(() => {
  'use strict';

  const SMART_SALES_URL = 'http://108.181.168.213:1021/';

  function applyProfileFixes() {
    /* Keep the existing portfolio. Only maintain the confirmed Smart Sales destination. */
    const projects = document.querySelectorAll('.project');
    const smartSalesCard = [...projects].find((card) =>
      /smart sales|salespulse/i.test(card.textContent || '')
    );

    if (smartSalesCard) {
      const heading = smartSalesCard.querySelector('h3');
      if (heading) heading.innerHTML = 'SMART Sales App<br>& Web Portal';

      let link = smartSalesCard.querySelector('a');
      if (!link) {
        link = document.createElement('a');
        smartSalesCard.appendChild(link);
      }
      link.href = SMART_SALES_URL;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Open Smart Sales ↗';
      link.title = 'Open Smart Sales';
    }

    /* ONLY the profile-card details requested: photo frame + RSM visibility. */
    const card = document.querySelector('.card3d');
    const photo = card?.querySelector('img');
    const role = card?.querySelector('.card-top small');

    if (card) {
      /* Preserve the last stable card dimensions. */
      card.style.width = '245px';
      card.style.height = '390px';
      card.style.padding = '15px';
    }

    if (role) {
      role.textContent = 'RSM · NORTH PAKISTAN';
      role.style.display = 'block';
      role.style.minWidth = '104px';
      role.style.textAlign = 'right';
      role.style.fontSize = '7px';
      role.style.fontWeight = '900';
      role.style.letterSpacing = '.055em';
      role.style.lineHeight = '1.2';
      role.style.color = '#ffffff';
      role.style.opacity = '1';
      role.style.visibility = 'visible';
      role.style.whiteSpace = 'nowrap';
    }

    if (photo) {
      /* The source headshot is 3:5. The frame follows that ratio exactly. */
      photo.style.width = '130px';
      photo.style.height = '217px';
      photo.style.aspectRatio = '3 / 5';
      photo.style.objectFit = 'cover';
      photo.style.objectPosition = 'center top';
      photo.style.display = 'block';
      photo.style.margin = '16px auto 4px';
      photo.style.padding = '0';
      photo.style.borderRadius = '12px';
      photo.style.border = '4px solid rgba(255,255,255,.95)';
      photo.style.background = 'transparent';
      photo.style.boxShadow = '0 10px 28px rgba(0,0,0,.16)';
    }

    const mobileStyle = document.createElement('style');
    mobileStyle.textContent = `
      @media (max-width:760px) {
        .card3d {
          width: 210px !important;
          height: 335px !important;
          padding: 13px !important;
        }
        .card3d .card-top small {
          min-width: 92px !important;
          font-size: 6px !important;
          opacity: 1 !important;
          color: #fff !important;
          visibility: visible !important;
        }
        .card3d img {
          width: 100px !important;
          height: 167px !important;
          margin: 13px auto 4px !important;
          padding: 0 !important;
          object-fit: cover !important;
          object-position: center top !important;
        }
      }
    `;
    document.head.appendChild(mobileStyle);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(applyProfileFixes, 0), { once: true });
  } else {
    setTimeout(applyProfileFixes, 0);
  }
})();
