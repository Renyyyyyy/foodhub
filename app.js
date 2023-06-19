
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDdutsrDFlAG9WpzYW4bbwI2bbu0pvt47A",
    authDomain: "reny-5ed93.firebaseapp.com",
    projectId: "reny-5ed93",
    storageBucket: "reny-5ed93.appspot.com",
    messagingSenderId: "36773305815",
    appId: "1:36773305815:web:265c23e9265e6ef415bf92"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

//   sign up function
  let signUpButton = document.getElementById("signup");
  signUpButton.addEventListener("click", (e) =>{
    // prevent mouse funtion
    e.preventDefault();
    console.log("clicked");

    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword")

    auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        window.location = "index.html"
        alert("user signed up successfully")

        // sign in

        var user = userCredential.user;
        console.log("user, user.email");
    })

    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error Code", errorCode);
        console.log("error Message", errorMessage);
        alert(errorMessage);
    });

  });

//   signed in fuction

  let signinButton = document.getElementById("signin");
  signinButton.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("oyinnnnn");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) =>{
        var user = userCredential.user;
        console.log("user", user.email);
        window.location = "index0.html"
    })

    .catch((error) => {
        var errorCode = error.code;
        var errorMessage= error.message;
        alert(errorMessage)
    })
  })
