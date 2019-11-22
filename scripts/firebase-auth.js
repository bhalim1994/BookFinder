//Authentication state observer
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("user is logged in");

    } else {
      // User is signed out.
	  console.log("user is logged out");
	  window.location.href = "./login.html";
      // Do nothing
      
    }
  });