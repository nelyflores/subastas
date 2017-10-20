(function(){


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDdGVRy-DrxZT-bshmKywvG9gL9q48dzh4",
    authDomain: "subastas-4b635.firebaseapp.com",
    databaseURL: "https://subastas-4b635.firebaseio.com",
    projectId: "subastas-4b635",
    storageBucket: "subastas-4b635.appspot.com",
    messagingSenderId: "94258785585"
  };
  firebase.initializeApp(config);

 

//obtener elementos del formulario de login
const txtEmail = document.getElementById('loginEmail');
const txtPassword = document.getElementById('loginPassword');
const btnLogin= document.getElementById('botonLogin');
 // Añadir evento login
 btnLogin.addEventListener('click', e=>{
  //obtener email y pass
  const email=txtEmail.value;
  const pass= txtPassword.value;
  const auth=firebase.auth();
  //login
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));

 });

 // obtener elementos del formulario registro
 const txtEmailRegistro = document.getElementById('registroEmail');
 const txtPasswordRegistro = document.getElementById('registroPassword');
 const btnRegistro = document.getElementById('saveRegistro');

 //Añadir evento registro
 btnRegistro.addEventListener('click', e=>{
  //obtener email y password
  const emailRegistro=txtEmailRegistro.value;
  const passRegistro= txtPasswordRegistro.value;
  const auth=firebase.auth();  
  //registro
  const promise = auth.createUserWithEmailAndPassword(emailRegistro, passRegistro);
  promise.catch(e => console.log(e.message));

 });

 //obtener el valor del boton salir, mensaje y agregar subastas
 const btnSalir=document.getElementById('salir');
 const btnMensaje= document.getElementById('mensaje');
 const btnSubasta=document.getElementById('crearSubasta');
 const btnNavIngresar=document.getElementById('btnIngresar');
 const btnIrdetalle =document.getElementById("irSubasta");
 console.log(btnIrdetalle);
  btnSalir.addEventListener('click', e=>{
  firebase.auth().signOut();
});

//Añadir un listener en tiempo real
firebase.auth().onAuthStateChanged(firebaseUser=>{
  if(firebaseUser){
    console.log(firebaseUser);
    btnSalir.style.display='block';
    btnMensaje.style.display='block';
    btnSubasta.style.display='block';
    btnNavIngresar.style.display='none';
   

  }else{
   // alert("no logueado");
    btnSalir.style.display='none';
    btnMensaje.style.display='none';
    btnSubasta.style.display='none';
    btnNavIngresar.style.display='block';
   
  }
});
 }());