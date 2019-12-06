// Authentication state observer.
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("user is logged in");

      // Check if user if verified.
      if(user.emailVerified === true){
        	// if verified, set users verification to true.
	        database.collection("Users").doc(user.uid).update({
              isVerified: true,

          }).then(function () {
                console.log("user is verified");

      }).catch(function (error) {
            // The document probably doesn't exist.
            alert("Error updating Profile");
            console.error("Error updating Profile", error);
      });
    }
  } else {
    // User is signed out.
    console.log("user is logged out");
    // Go to login page
    window.location.href = "./login.html";
  }
});