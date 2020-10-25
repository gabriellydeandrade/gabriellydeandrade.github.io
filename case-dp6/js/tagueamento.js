window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-4M1SRN6JCW', {
    'page_path': location.pathname
  });


function handleEventClick(category, action, label) {
    console.log("entrou aqui");
    console.log(action);
    gtag('event', action, {
        'event_category': category,
        'event_label': label
        });
}

var contactEvent = document.getElementById('contato');
contactEvent.addEventListener('click', function(){handleEventClick('menu', 'entre_em_contato', 'link_externo')});

var downloadPDF = document.getElementById('download-pdf');
downloadPDF.addEventListener('click', function(){handleEventClick('menu', 'download_pdf', 'download_pdf')});
