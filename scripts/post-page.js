// Set variables
var postID = localStorage.getItem("postID")
var storage = firebase.storage();
var docRef = database.collection("GlobalPosts").doc(postID);

// Get the document
docRef.get().then(function(doc) {
    //Make sure document exists
    if (doc.exists) {
        createPost(doc.data().Title, doc.data().Price, doc.data().description, doc.data().imageURL);

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
});

// Creates the book postings
function createPost(title, price, description, url){
    // Set page title to post title
    document.title = title;
    document.getElementById("title").innerHTML = title;
    // Gets container to post it in
    var content = document.getElementById("container");


    // Getting images
    document.getElementById("image").src = url;
    document.getElementById("price").innerHTML = "$" + price;
    document.getElementById("description").innerHTML = description;
} 

// Back button click
$(document).ready(function() {
    // This WILL work because we are listening on the 'document', 
    // for a click on an element with an ID of #test-element
    $(document).on("click","#back",function() {
        window.location.href = "./main.html";
    });
});