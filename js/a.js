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

db.collection("usuarios").add({
    nombre: "Maria",
    email: "maria@gmail.com",
    telefono: 696969699
})
.then(function(docRef){
    console.log("Documento escrito con ID: " , docRef.id);
})
.catch(function(error){
    console.error("Error al añadir el documento:" , error )
});
