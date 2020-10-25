var formName = document.getElementById('nome');
formName.addEventListener('input', function(){handleEventClick('contato', formName.id, 'preencheu')});

var formEmail = document.getElementById('email');
formEmail.addEventListener('input', function(){handleEventClick('contato', formEmail.id, 'preencheu')});

var formTelephone = document.getElementById('telefone');
formTelephone.addEventListener('input', function(){handleEventClick('contato', formTelephone.id, 'preencheu')});

var formAccepted = document.getElementById('aceito');
formAccepted.addEventListener('input', function(){handleEventClick('contato', formAccepted.id, 'preencheu')});