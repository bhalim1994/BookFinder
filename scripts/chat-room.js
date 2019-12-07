//Add inputed text into chat message.
function add() {
    //Gets your chat bubble.
    document.getElementsByClassName('chatSent')[0].innerHTML += '<div class="chatBubble2">' +
    //Gets the chat input.
        document.getElementsByClassName('chatText')[0].value + '</div>';
}

// Clears chat input after enter or button press.
window.onload = function clear () {
    //Set a clear varible to save blank value.
    var clear =
        document.getElementsByClassName('chatText').value = '';
}