var postID = localStorage.getItem("postID")
var storage = firebase.storage();
var docRef = database.collection("GlobalPosts").doc(postID);

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());

        var url = "gs://bookfinder-2b31b.appspot.com/GlobalPosts/" + postID;
        var gsReference = storage.refFromURL(url);
        

        createPost(doc.data().Title, gsReference);

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
});

function createPost(title, gsReference){
    var content = document.getElementById("container");

    //getting images
    var img = document.createElement("IMG");
    gsReference.child("1.jpeg").getDownloadURL().then(onResolve, onReject);
    gsReference.child("1.png").getDownloadURL().then(onResolve, onReject);
    gsReference.child("1.jpg").getDownloadURL().then(onResolve, onReject);

    function onResolve(foundURL) { 
        img.src = foundURL;
        img.style.width = "100%";
        img.style.height = "auto";

    } 
    function onReject(error){ 
        console.log("Ignore this please :)");
    }


    content.appendChild(img);



}