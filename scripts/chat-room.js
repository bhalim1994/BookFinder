//Add inputed text into chat message
function add() {
    document.getElementsByClassName('chat_s')[0].innerHTML += '<div class="chat_bubble-2">' +
        document.getElementsByClassName('chatText')[0].value + '</div>';
}

// Clear text box after enter or button press
window.onload = function clear () {
    var clear =
        document.getElementsByClassName('chatText').value = '';
}