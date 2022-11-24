function connect() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if(username == "admin" || password == "antonia54")
  { 
    window.location.href('https://www.google.com');
    return 0;
  }
}

//firebase option

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCY-qa7t_e7_TIwWz8confOdNJ6JrKMxho",
//   authDomain: "logintsl.firebaseapp.com",
//   projectId: "logintsl",
//   storageBucket: "logintsl.appspot.com",
//   messagingSenderId: "508113769785",
//   appId: "1:508113769785:web:e3047e36e7d04afb1e04e8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = firebase.auth()

// function connect() {
//   var email = document.getElementById("email");
//   var password = document.getElementById("password");
//   const promise = auth.signInWithEmailAndPassword(
//     email.value, password.value);
//   promise.catch((e) => alert(e.message));

//   alert("Conectat!")
// }

