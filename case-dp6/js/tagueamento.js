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

// Link menu

var contactEvent = document.getElementById('contato');
contactEvent.addEventListener('click', function(){handleEventClick('menu', 'entre_em_contato', 'link_externo')});

var downloadPDF = document.getElementById('download-pdf');
downloadPDF.addEventListener('click', function(){handleEventClick('menu', 'download_pdf', 'download_pdf')});

// Analise page

var analysisIpsum = document.getElementById('analise-ipsum');
analysisIpsum.addEventListener('click', function(){handleEventClick('analise', 'ver_mais', analysisIpsum.getAttribute('data-name'))});


var analysisDolor = document.getElementById('analise-dolor');
analysisDolor.addEventListener('click', function(){handleEventClick('analise', 'ver_mais', analysisDolor.getAttribute('data-name'))});


var analysisLorem = document.getElementById('analise-lorem');
analysisLorem.addEventListener('click', function(){handleEventClick('analise', 'ver_mais', analysisLorem.getAttribute('data-name'))});
