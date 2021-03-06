// Stores the URL of the uploaded image.
var imageURL;

// Upload the file fo preview.
$(function () {
    $(document).on("change", "#uploadFile", function () {
        var uploadFile = $(this);
        var files = !!this.files ? this.files : [];
        //Makes sure a file is selected and that it's valid
        if (!files.length || !window.FileReader) return;

        // Allows only image files
        if (/^image/.test(files[0].type)) {
            //FileReader instance
            var reader = new FileReader();
            //Reads local file
            reader.readAsDataURL(files[0]);
            //Sets the image as the background
            reader.onloadend = function () {
                imageURL = files[0];
                uploadFile.closest("#imgUp").find('#imagePreview').css("background-image", "url(" + this.result + ")");
            }
        }

    });
});

// Post button clicked.
$("#submit").closest('form').on('submit', function (event) {
    event.preventDefault();

    // Get the users data.
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // Checks if user is verified.
            if (user.emailVerified === false) {
                alert("You have not verified your email.\nPlease verify by clicking on the link sent to your email.")
                return;
            } else {
                // Successful login.

                // Check if content is empty.
                var title = document.getElementById("name").value;
                var price = document.getElementById("price").value;
                var university = document.getElementById("university").value;
                var description = document.getElementById("description").value;
                //Title cannot be empty.
                if (title == "") {
                    alert("Title is Empty.");
                } //Price cannot be empty .
                else if (price == "") {
                    alert("There is no Price.");
                } //University on default choice.
                else if (university == "default") {
                    alert("Please choose your university");
                } //Need to upload an image.
                 else if (imageURL == null) {
                    alert("No image.");
                } else { 
                    // Starts post upload.
                    // Add a new document with a generated id.
                    database.collection("GlobalPosts").add({
                        Title: title,
                        Price: price,
                        University: university,
                        description: description,
                        imageURL: "",
                        PostOwner: user.email,
                        //Creates the state change.
                    }).then(function (docRef) {
                        console.log("Document written with ID: ", docRef.id);
                        // Upload image.
                        var file = imageURL;
                        var storageRef = firebase.storage().ref();
                        var uploadTask = storageRef.child('GlobalPosts/' + docRef.id + "/postImage").put(file);
                        // Register three observers:
                        // 1. 'state_changed' observer, called any time the state changes.
                        // 2. Error observer, called on failure.
                        // 3. Completion observer, called on successful completion.
                        uploadTask.on('state_changed', function (snapshot) {
                            // Observe state change events such as progress, pause, and resume.
                            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded.
                            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            console.log('Upload is ' + progress + '% done');
                            switch (snapshot.state) {
                                case firebase.storage.TaskState.PAUSED: // or 'paused'
                                    console.log('Upload is paused');
                                    break;
                                case firebase.storage.TaskState.RUNNING: // or 'running'
                                    console.log('Upload is running');
                                    break;
                            }
                        }, function (error) {
                            // Handle unsuccessful uploads.
                            console.log("upload failed");
                        }, function () {
                            // Handle successful uploads on complete.
                            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                                console.log('File available at', downloadURL);
                                // Add image URL location.
                                database.collection("GlobalPosts").doc(docRef.id).update({
                                    imageURL: downloadURL,
                                }).then(function () {
                                    console.log("URL successfully updated!");
                                    // Go to success page.
                                    window.location.href = "./sell-success.html";
                                });
                            });
                        })
                    })
                }
            }
        } else {
            //User not logged in
        }
    });
});