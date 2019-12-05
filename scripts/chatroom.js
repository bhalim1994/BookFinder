function add() {
    document.getElementsByClassName('chat_s')[0].innerHTML += '<div class="chat_bubble-2">' +
        document.getElementsByClassName('chatText')[0].value + '</div>';
}

window.onload = function clear () {
    var clear =
        document.getElementsByClassName('chatText').value = '';
}