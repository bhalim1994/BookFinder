// Authentication state observer.
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("user is logged in");

      // Go to main Page.
      window.location.href = "./main.html";

    } else {
      // User is signed out.
      console.log("user is logged out");
      // Do nothing
      
    }
  });


//login button clicked
$("#submit").closest('form').on('submit', function(event) {
    event.preventDefault();

    // Get inputs
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;

    // SignIn user.
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert("Email is not registered with us");
      }
      console.log(error);
      document.getElementById('quickstart-sign-in').disabled = false;
      // [END_EXCLUDE]
    });
    

});