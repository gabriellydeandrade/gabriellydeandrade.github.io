window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-12345-6', {
    'page_path': location.pathname
  });


function handleEvent(category, action, label) {
    gtag('event', action, {
        'event_category': category,
        'event_label': label
        });
}

var contactEvent = document.getElementById('contato');
contactEvent.addEventListener('click', function(){handleEvent('menu', 'entre_em_contato', 'link_externo')});

var downloadPDF = document.getElementById('download-pdf');
downloadPDF.addEventListener('click', function(){handleEvent('menu', 'download_pdf', 'download_pdf')});
