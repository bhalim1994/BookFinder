// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA0aEEKjsAIO88GyL7wJ8OQX_h2kWVwb40",
    authDomain: "bookfinder-2b31b.firebaseapp.com",
    databaseURL: "https://bookfinder-2b31b.firebaseio.com",
    projectId: "bookfinder-2b31b",
    storageBucket: "gs://bookfinder-2b31b.appspot.com/",
    messagingSenderId: "599245595354",
    appId: "1:599245595354:web:185776ffe10c451c613be3"
};

//Initialize firebase config & database
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();

