var postID = localStorage.getItem("postID")
var storage = firebase.storage();
var docRef = database.collection("GlobalPosts").doc(postID);

// Get the Document
docRef.get().then(function(doc) {
    if (doc.exists) {
        createPost(doc.data().Title, doc.data().Price, doc.data().Description, doc.data().imageURL);

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
});

function createPost(title, price, description, url){
    // Set page title to post title
    document.title = title;

    var content = document.getElementById("container");

    //getting images
    var img = document.createElement("IMG");
    img.src = url;

    content.appendChild(img);

} 