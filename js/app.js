var firebaseConfig = {
  apiKey: "AIzaSyAnMk_5ICeH2e2CsV-2srQYBe8HdwQc3eo",
  authDomain: "deustocontacts.firebaseapp.com",
  databaseURL: "https://deustocontacts.firebaseio.com",
  projectId: "deustocontacts",
  storageBucket: "deustocontacts.appspot.com",
  messagingSenderId: "501513789666",
  appId: "1:501513789666:web:e0b995fbf7bbd389b13ebb",
  measurementId: "G-6T6G9W7CQ3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.initializeApp = {
   apiKey: "AIzaSyAnMk_5ICeH2e2CsV-2srQYBe8HdwQc3eo",
   authDomain: "deustocontacts.firebaseapp.com",
   projectId: "deustocontacts"
};
// Initialize Firebase
var db = firebase.firestore();

//Agregar Usuarios de manera statica
function guardar(){
    var name = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('telefono').value;
    db.collection("usuarios").add({
        nombre: name,
        email: email,
        telefono: phone
    })
    .then(function(docRef){
        console.log("Documento escrito con ID: " , docRef.id);
        document.getElementById('nombre').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telefono').value = '';
    })
    .catch(function(error){
        console.error("Error al añadir el documento:" , error )
    });
}

//Leer Usuarios
var tabla = document.getElementById('tabla');
db.collection("usuarios").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tabla.innerHTML += `
        <tr>
        <th scope="row">${doc.id}</th>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().email}</td>
        <td>${doc.data().telefono}</td>
        <td><button class= "btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
        <td><button class= "btn btn-warning" onclick="editar('${doc.id}','${doc.data().nombre}','${doc.data().email}','${doc.data().telefono}')">Editar</button></td>
        </tr>
        `
    });
});

//Borrar Usuarios
function eliminar(id){
    db.collection("usuarios").doc(id).delete().then(function() {
        console.log("Usuario eliminado correctamente!");
    }).catch(function(error) {
        console.error("Error al eliminar el usuario: ", error);
});
}

//Actualizar Usuarios

function editar(id,nombre,email,telefono){

     document.getElementById('nombre').value = nombre;
     document.getElementById('email').value = email;
     document.getElementById('telefono').value = telefono;
     var boton = document.getElementById('boton');
     boton.innerHTML = 'Editar';

     boton.onclick = function(){
     var contacto = db.collection("usuarios").doc(id);
     // Set the "capital" field of the city 'DC'

     var name = document.getElementById('nombre').value;
     var email = document.getElementById('email').value;
     var telefono = document.getElementById('telefono').value;

     return contacto.update({
        nombre: name,
        email: email,
        telefono: telefono
     })
     .then(function() {
        console.log("Usuario editado correctamente!");
        boton.innerHTML = 'Guardar';
        document.getElementById('nombre').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telefono').value = '';
     })
     .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
     });
     }

}




