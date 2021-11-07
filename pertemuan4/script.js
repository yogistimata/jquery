$(document).ready(function(){
    //efek hide
    $('#Hide').click(function(){
        $('#Kotak').hide(2000);
    });
    //efek show
    $('#Show').click(function(){
        $('#Kotak').show(2000);
    });

    //efek fadeout
    $('#fadeOut').click(function(){
        $('.box1').fadeOut();
        $('.box2').fadeOut(1000);
        $('.box3').fadeOut(3000);
    });

    //efek fadeIn
    $('#fadeIn').click(function(){
        $('.box1').fadeIn();
        $('.box2').fadeIn(2000);
        $('.box3').fadeIn(4000);
    });

    $('#fadeToggle').click(function(){
        $('.box1').fadeToggle();
        $('.box2').fadeToggle(2000);
        $('.box3').fadeToggle(4000);
    });

    $('#fadeTo').click(function(){
        $('.box1').fadeTo("slow" , 0.2);
        $('.box2').fadeTo("slow" , 0.3);
        $('.box3').fadeTo("slow" , 0.4);
    });
});