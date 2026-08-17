(() => {
  'use strict';

  const SMART_SALES_URL = 'http://108.181.168.213:1021/';

  function applyProfileFixes() {
    /* Smart Sales: replace the old SalesPulse project link with the real Smart Sales endpoint. */
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

    /* Keep SalesPulse as the second project, but make sure its old duplicate link is not used. */
    const salesPulseCard = [...projects].find((card) =>
      /salespulse/i.test(card.textContent || '')
    );
    if (salesPulseCard && salesPulseCard !== smartSalesCard) {
      const heading = salesPulseCard.querySelector('h3');
      if (heading) heading.innerHTML = 'SalesPulse<br>AI Analytics';
    }

    /* Compact, correctly framed 3:5 portrait. The full headshot stays inside the frame. */
    const photo = document.querySelector('.card3d img');
    if (photo) {
      photo.style.width = '112px';
      photo.style.height = '180px';
      photo.style.aspectRatio = '3 / 5';
      photo.style.objectFit = 'contain';
      photo.style.objectPosition = 'center top';
      photo.style.display = 'block';
      photo.style.margin = '28px auto 12px';
      photo.style.borderRadius = '12px';
      photo.style.border = '4px solid rgba(255,255,255,.95)';
      photo.style.background = '#eef2f7';
      photo.style.boxShadow = '0 10px 28px rgba(0,0,0,.16)';
    }

    const card = document.querySelector('.card3d');
    if (card) {
      card.style.width = '245px';
      card.style.height = '390px';
      card.style.padding = '15px';
    }

    const mobileStyle = document.createElement('style');
    mobileStyle.textContent = `
      @media (max-width:760px) {
        .card3d {
          width: 210px !important;
          height: 335px !important;
          padding: 13px !important;
        }
        .card3d img {
          width: 90px !important;
          height: 150px !important;
          margin: 22px auto 9px !important;
          object-fit: contain !important;
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
