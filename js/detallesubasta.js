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

function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 10
        });
        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }