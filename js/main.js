$(function () {
    'use strict';
    //adjust slider Height
    var winH     =  $(window).height(),
        upperH   =  $('.navbar').innerHeight(),
        navH     =  $('.upper-bar').innerHeight();
    $('.slider .carousel-item').height(winH - ( upperH + navH ));    
    
    
    //Featured work shuffle
    $('.feautured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
  
        if ($(this).data('class') === 'all') {
            $('.shuffle .col-md').css('opacity', '1');
        }else {
            $('.shuffle .col-md').css('opacity', '.02 ');
            $($(this).data('class')).parent().css('opacity', '1');
        }
    });
});