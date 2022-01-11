$("#traco-menu").on('mouseover', function() {
    $("#nav-menu").attr('style', 'width: 300px!important');
    $("#list-group").attr('style', 'display: block');
    $("#footer").attr('style', 'margin-left: 300px!important');
    $("#coluna1").attr('style', 'margin-left: 300px!important');
});

$("#btn-sanduiche").click(function() {
    $("#nav-menu").attr('style', 'width: 71px!important');
    $("#list-group").attr('style', 'display: none');
    $("#footer").attr('style', 'margin-left: 70px!important');
    $("#coluna1").attr('style', 'margin-left: 70px!important');
});

