//Authentication state observer.
firebase.auth().onAuthStateChanged(function (user) {
	if (user) {

		console.log("user is logged in");
		

	} else {
		// User is signed out.
		console.log("user is logged out");
		// Do nothing.

	}
});

//Sign Up button clicked.
$("#submit").closest('form').on('submit', function (event) {
	event.preventDefault();
	var userEmail = document.getElementById("email").value;
	var userPassword = document.getElementById("password").value;
	var userFirstName = document.getElementById("firstName").value;
	var userLastName = document.getElementById("lastName").value;
	var userUniversity = document.getElementById("university").value;


	// Create user.
	firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword);

	//Authentication state observer.
	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			// User is signed in.
			// Add user Profile to database.
			database.collection("Users").doc(user.uid).set({
				Email: user.email,
				FirstName: userFirstName,
				LastName: userLastName,
				PhoneNumber: "",
				University: userUniversity,
				UserName: "",
				profilePicture: ""

			});
			console.log("user is logged in");

			var docRef = database.collection("Users").doc(user.uid);
			docRef.get().then(function (doc) {
				if (doc.exists) {
					console.log("Document data:", doc.data());
					if (userFirstName == doc.data().FirstName) {
						window.location.href = "./main.html";
					}
				} else {
					// doc.data() will be undefined in this case.
					console.log("No such document!");
				}
			}).catch(function (error) {
				console.log("Error getting document:", error);
			});
		} else {
			// User is signed out.
			console.log("user is logged out");
		}


	});
});