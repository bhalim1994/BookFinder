//Add inputed text into chat message
function add() {
    document.getElementById('chatSent')[0].innerHTML += '<div class="chatBubble2">' +
        document.getElementById('chatText')[0].value + '</div>';
}

// Clear text box after enter or button press
window.onload = function clear () {
    var clear =
        document.getElementById('chatText').value = '';
}