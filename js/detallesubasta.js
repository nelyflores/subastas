$(window).load(function() {
  var tarjetaSeleccionada = localStorage.getItem("tarjetaSeleccionada");
console.log(tarjetaSeleccionada);

  var refDetalle=firebase.database().ref().child("nuevasubasta");
  console.log(refDetalle);
  var cargarPagina = function(){
    $('#detalles').modal('show');
    $('.ofertar').click(ofertar);
    $('.aceptar').click(cerrarModal);
    
    mostrarDetalles();
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

// cargando datos de la bd

function mostrarDetalles(){
tarjetaSeleccionada.once("value", function(snap){
  var datos= snap.val()
  console.log(datos);
});
}



  $(document).ready(cargarPagina);
});
