console.log("Getting Posts");
var posts = [];
var docRef = database.collection("GlobalPosts");
docRef.onSnapshot(function(querySnapshot){
    querySnapshot.forEach(function(doc){

        createPost( doc.data().Title,
                    doc.data().Price,
                    doc.data().Description,)
    })
})




//Body
var body = document.getElementsByTagName("body");
//Main container
var container = document.getElementById("container");

//test



function createPost(title, price, description){
    
    

}