var formName = document.getElementById('nome');
formName.addEventListener('input', function(){handleEvent('contato', formName.id, 'preencheu')});

var formEmail = document.getElementById('email');
formEmail.addEventListener('input', function(){handleEvent('contato', formEmail.id, 'preencheu')});

var formTelephone = document.getElementById('telefone');
formTelephone.addEventListener('input', function(){handleEvent('contato', formTelephone.id, 'preencheu')});

var formAccepted = document.getElementById('aceito');
formAccepted.addEventListener('input', function(){handleEvent('contato', formAccepted.id, 'preencheu')});

var popup = document.querySelector('.lightbox-content');
popup.addEventListener('DOMSubtreeModified', function(){handleEvent('contato', 'enviado', 'enviado')});
