//Authentication state observer.
firebase.auth().onAuthStateChanged(function (user) {
	//Checks if user is logged in.
	if (user) {
		console.log("user is logged in");
		

	} else {
		// User is signed out.
		console.log("user is logged out");
		// Do nothing.

	}
});

//Sign up button clicked.
$("#submit").closest('form').on('submit', function (event) {
	event.preventDefault();
	// Loading in email, password, first and last name, and university of user.
	var userEmail = document.getElementById("email").value;
	var userPassword = document.getElementById("password").value;
	var userFirstName = document.getElementById("firstName").value;
	var userLastName = document.getElementById("lastName").value;
	var userUniversity = document.getElementById("university").value;

	// University email checker.
	console.log(userEmail.substr(userUniversity.length - 10).toLowerCase());

	//Needs to be one of these domains.
	if(userEmail.substr(userEmail.length - 10).toLowerCase() != "my.bcit.ca"){
		if(userEmail.substr(userEmail.length - 6).toLowerCase() != "sfu.ca"){
			if(userEmail.substr(userEmail.length - 13).toLowerCase() != "alumni.ubc.ca"){
				//Shows alert of what happens if they don't have it.
				alert("Not a registered University Email." + 
						"\nPlease enter your school Email.\n" +
						"Current registered addresses are:\n\nmy.bcit.ca\nsfu.ca\nalumni.ubc.ca");
				return;
			}
		}
		
	}

	// Create user.
	firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then(function(result) {
		// result.user.tenantId should be ‘TENANT_PROJECT_ID’.
	  }).catch(function(error) {
		// Handle error.
		alert(error);
	  });

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
				profilePicture: "",
				isVerified: false

			});
			console.log("user is logged in");

			//Send email verification to user's email.
			user.sendEmailVerification().then(function() {
				// Email sent.

				//Upload user data to database.
				var docRef = database.collection("Users").doc(user.uid);
				docRef.get().then(function (doc) {
					// Makes sure document exists.
					if (doc.exists) {
						console.log("Document data:", doc.data());
						if (userFirstName == doc.data().FirstName) {
							window.location.href = "./main.html";
						}
					} else {
						// doc.data() will be undefined in this case.
						console.log("No such document!");
						alert("Your Account was not Made");
					}
					//Catches error getting document exception.
				}).catch(function (error) {
					console.log("Error getting document:", error);
				});
			  }).catch(function(error) {
				// An error happened.
			});


		} else {
			// User is signed out.
			console.log("user is logged out");
		}


	});
});