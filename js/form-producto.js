$(window).load(function() {
  var cargarPagina = function(){
    $('#subastar').modal('show')
    $("#titulo-producto").keyup(cuentaTitulo);
    $("#descripcionProducto").keyup(cuentaDescripcion);
  };

  var cuentaTitulo = function(){
    var letras = $("#titulo-producto").val().length;
    var nombreDeProducto = $("#titulo-producto").val().length;

    if(letras >=30){
      $("#titulo-producto").attr("disabled", true);
    }

    if(letras >= 20){
      $("#contador-titulo").css("color", "red");
    }

    if (typeof(Storage) !== "undefined") {
      // Store
      localStorage.setItem("tituloProducto", nombreDeProducto);
      // Retrieve
      localStorage.getItem("tituloProducto");
    }
    $("#contador-titulo").text(letras);
  };

  //funcion para validar la descripcion menor a 1000 caracteres
  var cuentaDescripcion = function (){
    var letras = $("#descripcionProducto").val().length;
    var valorDescripcion = $("#descripcionProducto").val();

    if(letras >=1000){
      $("#descripcionProducto").attr("disabled", true);
    }

    if (typeof(Storage) !== "undefined") {
      // Store
      localStorage.setItem("descripcion", valorDescripcion);
      // Retrieve
      localStorage.getItem("descripcion");
    }
  };

  $(document).ready(cargarPagina);
});

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

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

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
    }
  }
