//Authentication state observer
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("user is logged in");
      if(user.emailVerified === true){
        	// Add user Profile to database
	        database.collection("Users").doc(user.uid).update({
              isVerified: true,
              //Show profile updated
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
    window.location.href = "./login.html";
    // Do nothing
  }
});