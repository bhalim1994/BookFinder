var storage = firebase.storage();
console.log("Getting Posts");
var docRef = database.collection("GlobalPosts");
docRef.onSnapshot(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        if(doc){

            var url = "gs://bookfinder-2b31b.appspot.com/GlobalPosts/" + doc.id;

            var gsReference = storage.refFromURL(url);

            createPost( doc.data().Title,
                        doc.data().Price,
                        doc.data().imgCount,
                        gsReference);
        }
    })
});


 
//Body
var body = document.getElementsByTagName("body");
//Main container
var container = document.getElementById("container");
container.style.marginTop = "15%";
container.style.marginBottom = "15%";


function createPost(title, price, imgCount, gsReference, id){

    //Outer box
    var boxOut = document.createElement("div");
    boxOut.style.width = "100%";
    boxOut.style.paddingTop = "3%";
    boxOut.style.paddingBottom = "3%";
    boxOut.style.backgroundColor = "white";
    boxOut.style.marginBottom = "3.5%";
    boxOut.style.boxShadow = "0.5px 0px 3px #888888";

    //Inner Box
    var boxIn = document.createElement("div");
    boxIn.style.display = "block";
    boxIn.style.marginLeft = "auto";
    boxIn.style.marginRight = "auto";
    boxIn.style.width = "50%";
    boxIn.style.height = "50%";
    boxIn.style.paddingBottom = "0";
    boxIn.style.marginBottom = "0";

    var a = document.createElement("a");
    a.href = "#";

    //getting images
    var img = document.createElement("IMG"); 
    gsReference.child("1.jpeg").getDownloadURL().then(onResolve, onReject);
    gsReference.child("1.png").getDownloadURL().then(onResolve, onReject);
    gsReference.child("1.jpg").getDownloadURL().then(onResolve, onReject);

    function onResolve(foundURL) { 
        img.src = foundURL;
    } 
    function onReject(error){ 
        console.log("Ignore this please :)");
    }
    
    img.style.width = "100%";
    img.style.marginBottom = "10%";
    img.style.boxShadow = "4px 4px 3px #888888, -4px -4px 3px #888888";
    img.style.zIndex = "1";
    

    var boxPrice = document.createElement("div");
    boxPrice.style.fontSize = "12px";
    boxPrice.style.textAlign = "left";
    boxPrice.style.fontFamily = "Roboto, sans-serif";
    boxPrice.style.marginBottom = "5px";
    boxPrice.style.marginLeft = "2%";
    boxPrice.style.marginRight = "2%";
    boxPrice.style.borderTop = "1px solid #bbbbbb";
    boxPrice.style.paddingTop = "3%";

    var priceC = document.createElement("span");
    priceC.innerHTML = "$" + price;
    priceC.style.color = "green";

    var descriptionBox = document.createElement("div");
    descriptionBox.style.fontSize = "15px";
    descriptionBox.style.textAlign = "left";
    descriptionBox.style.marginLeft = "2%";
    descriptionBox.style.fontFamily = "Roboto, sans-serif";

    var descriptionBoxText = document.createElement("span");
    descriptionBoxText.innerHTML = title;
    descriptionBoxText.style.color = "black";



 

    
    container.appendChild(boxOut);
    boxOut.appendChild(boxIn);
    boxIn.appendChild(a);
    a.appendChild(img);
    boxOut.appendChild(boxPrice);
    boxPrice.appendChild(priceC);
    boxOut.appendChild(descriptionBox);
    descriptionBox.appendChild(descriptionBoxText);
    
    
    
    
    
    
}