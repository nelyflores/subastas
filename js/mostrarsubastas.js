window.onload =inicializar;
var refNuevaSubasta;
var divtarjetaSubastas;
function inicializar(){
	refNuevaSubasta=firebase.database().ref().child("nuevasubasta");
	divtarjetaSubastas = document.getElementById('pruebafirebas');
	mostrarSubastasDeFirebase();
}

var plantillaSubasta= '<article class="col-xs-6">'+
            '<div class="panel panel-default">'+
                '<div class="panel-body">'+
                    '<a href="http://lorempixel.com/350/350/nature/" title="Nature Portfolio" class="zoom" data-title="Amazing Nature" data-footer="The beauty of nature" data-type="image" data-toggle="lightbox">'+
                        '<img src="--imagen--" alt="Nature Portfolio" />'+
                        '<span class="overlay"><i class="glyphicon glyphicon-fullscreen"></i></span>'+
                    '</a>'+
                '</div>'+
                '<div class="panel-footer">'+
                    '<h4>Precio Actual $100.00</h4>'+
                      '<h4>Precio Inicial  --precio-- </h4>'+
                    '<span class="pull-right">'+
                        '<a href=" detallesubasta.html" class="enviarDetalles" data-detallesubasta="--llave--">ir a subasta<i id="like1" class="glyphicon glyphicon-plus-sign"></i> </a><div id="like1-bs3"></div>'+
                   '</span>'+
                '</div>'+
            '</div>'+
        '</article>'

function mostrarSubastasDeFirebase(){
	refNuevaSubasta.on("value", function(snap){
		var datos= snap.val();
		var tarjetasSubastas="";
		for (var key in datos){
			tarjetasSubastas += plantillaSubasta.replace("--imagen--",datos[key].url1) 
								.replace("--precio--",datos[key].precio)
								.replace("--llave--",key)

								

		}
		 $("#pruebafirebas").html(tarjetasSubastas);
		 if(tarjetasSubastas != ""){
		 	var elementosSeleccionable = document.getElementsByClassName('enviarDetalles');
		 	for(var i =0; i<elementosSeleccionable.length; i++){
		 		elementosSeleccionable[i].addEventListener("click",mostrarDetalle, false);
		 	}
		 }
	});
}

function mostrarDetalle(){
	var keyDeSubastaSeleccionada = this.getAttribute("data-detallesubasta");
	var refDeSubastaSeleccionada =  refNuevaSubasta.child(keyDeSubastaSeleccionada);
	refDeSubastaSeleccionada.once("value",function(snap){
	var datos= snap.val();
		
		console.log(datos.titulo);
	})
	alert("la subasta seleccionada es :" + refDeSubastaSeleccionada );
	localStorage.setItem("tarjetaSeleccionada", refDeSubastaSeleccionada);
}