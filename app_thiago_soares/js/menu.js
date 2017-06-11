// Oculta todos componentes
$('section').addClass('hidden');

// Mosta o painel
$('#painel').removeClass('hidden');

// Configura os eventos de click dos menus
$('nav a').click(function (e) {
    $('section').addClass('hidden');
    $('#' + e.currentTarget.hash.substr(2)).removeClass('hidden');
});