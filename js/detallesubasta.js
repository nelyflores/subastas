$(window).load(function() {
  var cargarPagina = function(){
    $('#detalles').modal('show');
    $('.ofertar').click(ofertar);
    $('.aceptar').click(ofertar);
  };

  var ofertar = function(e){
    e.preventDefault();
    var valor = $('#ofertar').val();

    $(".cantidad-ofertada").text(valor);

    if('.')
  }

  $(document).ready(cargarPagina);
});
