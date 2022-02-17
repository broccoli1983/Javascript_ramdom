$(function () {
    var bool = [1, -1];
    $('ul').html(
        $('li').sort(function (a, b) {
            return bool[Math.floor(Math.random() * bool.length)];
        })
    );
});