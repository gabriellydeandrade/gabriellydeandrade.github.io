var analysis = document.querySelectorAll('.card-montadoras');

analysis.forEach(addEvent);

function addEvent(analysisElement){
    analysisElement.addEventListener('click', function(){handleEvent('analise', 'ver_mais', analysisElement.getAttribute('data-name'))});

}
