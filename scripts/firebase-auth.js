//Authentication state observer
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("user is logged in");
      if(user.emailVerified === true){
        var docRef = database.collection("Users").doc(user.uid);
        docRef.get().then(function (doc) {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            doc.data().isVerified = true;
            console.log("user is verified");
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        }).catch(function (error) {
          console.log("Error getting document:", error);
        });
      }

    } else {
      // User is signed out.
	  console.log("user is logged out");
	  window.location.href = "./login.html";
      // Do nothing
      
    }
  });