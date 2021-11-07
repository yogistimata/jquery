$(document).ready(function() {
    //selector tag
    $('h1').css('color','red');
    $('p').css('color' , 'blue');
    
    //selector class
    $('.selector').css('background-color' , 'red');
    $('.paragraf').css('color' , 'green');

    //selector id
    $('#selector').css('border' , '3px solid gold');
    $('#judul').css('border' , '3px solid blue');

    $('*').css('background-color' , 'pink');

    $('h4:eq(1)').css('background-color' , 'silver');

    $('input : submit').css('background-color' ,'green');
    $('input : button').css('padding' , '10px');
})