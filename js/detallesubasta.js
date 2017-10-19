$(window).load(function() {
  var cargarPagina = function(){
    $('#detalles').modal('show');
    $('.ofertar').click(ofertar);
    $('.aceptar').click(cerrarModal);
  };

  var ofertar = function(e){
    e.preventDefault();
    var valorOfertado = $('#ofertar').val();
    var aceptar = $(".cantidad-ofertada").text(valorOfertado);
  }

  var cerrarModal = function(e){
    e.preventDefault();
    var precioInicio = $('#precio-inicial').text();
    var valorOfertado = $('#ofertar').val();

    var suma1 = parseInt(precioInicio) + parseInt(valorOfertado);

    $('#confirmacion').modal('hide');
    $('.cantidad-ofertadaTotal').append(suma1);
  }




  $(document).ready(cargarPagina);
});
