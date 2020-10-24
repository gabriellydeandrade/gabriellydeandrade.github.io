window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-4M1SRN6JCW', {
    'page_path': location.pathname
  });


var contactEvent = document.getElementById('contato');

contactEvent.addEventListener('click', function(){handleEventClick('menu', 'entre_em_contato', 'link_externo')});

function handleEventClick(category, action, label) {
    gtag('event', action, {
        'event_category': category,
        'event_label': label
      });
  }