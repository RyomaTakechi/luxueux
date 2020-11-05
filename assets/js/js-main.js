$(function() {
    // $(window).ready(function() {
    //     alert('aaa');
    // });
    $(window).ready(function() {
        var h1 = $(window).height();
        var h2 = $('header').height();
        $('#top').css("height",h1 - h2);
    });
});
