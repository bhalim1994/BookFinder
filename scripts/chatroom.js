function add() {
    document.getElementsByClassName('chat_s')[0].innerHTML += '<div class="chat_bubble-2">' +
        document.getElementsByClassName('chatText')[0].value + '</div>';
}

var clear = function() {
    document.getElementsByClassName('chatText')[0].value = '';
}