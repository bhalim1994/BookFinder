//Sign out button clicked
$("#submit").closest('form').on('submit', function (event) {
    event.preventDefault();
    firebase.auth().signOut();
});

//Sign out when logOutContainer is clicked
$("#logoutContainer")
    .click(
        function(){
            firebase.auth().signOut();
        }
    )
