$(function(){
    $('.box1').slideDown(function (){
    $('.box1').css({
        'height': '100px',
        'width': '200px',
        'background-color': 'blue'
    });
    $('.box1').slideUp(2000);
    });
});