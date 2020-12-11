var formElements = document.querySelectorAll('.contato > ul > li');

formElements.forEach(addEvent);

function addEvent(formElement){
    var formLabel = formElement.querySelector('label');

    if (!formLabel) {
        return
    }

    var formInput = formElement.querySelector('input')
    formInput.addEventListener('input', function(){handleEvent('contato', formLabel.htmlFor, 'preencheu')});

}


var popup = document.querySelector('.lightbox-content');
popup.addEventListener('DOMSubtreeModified', function(){handleEvent('contato', 'enviado', 'enviado')});

