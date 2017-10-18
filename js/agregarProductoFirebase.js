 // Initialize Firebase


window.onload =inicializar;
var formNuevaSubasta;
var refNuevaSubasta;
function inicializar(){
	formNuevaSubasta = document.getElementById('SubastaNueva');
	formNuevaSubasta.addEventListener("submit", enviarSubastaFirebase, false);
	refNuevaSubasta=firebase.database().ref().child("nuevasubasta");
}

function enviarSubastaFirebase(event){
	event.preventDefault();
	refNuevaSubasta.push({
		descripcion: event.target.descripcionSubasta.value,
		duracion: event.target.duracionSubasta.value ,
		precio: event.target.precioSubasta.value,
		titulo: event.target.tituloSubasta.value,
		url1: event.target.url1Subasta.value,
		url2: event.target.url2Subasta.value,
		url3: event.target.url3Subasta.value 
	});
	
	formNuevaSubasta.reset();
}
