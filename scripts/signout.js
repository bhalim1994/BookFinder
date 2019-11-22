//Sign Out button clicked
$("#submit").closest('form').on('submit', function (event) {
    event.preventDefault();
    firebase.auth().signOut();
});

$("#logoutContainer")
    .click(
        function(){
            firebase.auth().signOut();
        }
    )
