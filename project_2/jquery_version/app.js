$(document).ready(function () {

    const $backgroundColor = $('#root');
    const $btn = $('#change-btn');

    function changeBackgroundColor(){
        $backgroundColor.css('background-color', 'red');
    }

    $btn.click(function (e) { 
        changeBackgroundColor();
    });

});