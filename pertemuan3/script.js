$(document).ready(function(){
    //Event clik
    $('#click').click (function(){
        alert ('TIDAK TERSEDIA');
    });

    //Event dblclick
    $('#dblclick').dblclick (function(){
        $(this).css('background-color' , 'blue');
    });

    //EVENT MOUSELEAVE
    $('.mouse').mouseleave (function(){
        $(this).css('background-color' , 'gold');
    });

     //EVENT MOUSEENTER
     $('.mouse').mouseenter (function(){
        $(this).css('background-color' , 'silver');
    });

    //EVENT KEYDOWN
    $('#keydown').keydown (function(){
        $('#sms_keydown').text($(this).val());
    });

     //EVENT KEYUP
     $('#keyup').keyup (function(){
        $('#sms_keyup').text($(this).val());
    });


}) 