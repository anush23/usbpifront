/**
 * Created by ������������� on 5/19/2017.
 */
$(document).ready(function(){
    $('.your-class').slick({
        dots: true,
        arrows:false,
        autoplay:true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});
$('.menu_section .toggle_item').on('click',function(){
    $('.menu_section ul').slideToggle();
});


$('.category_links li').hover(function() {
    $(this).find('.subcategory_links').show();
},function() {
    $(this).find('.subcategory_links').hide();
});

$('.product_view_item span').on('click', function() {
    $('.product_view_item span.active').removeClass('active');
    $(this).addClass('active');

});
$('span.grid_view_btn').on('click',function(){
    $('.product_info_section').addClass('grid_view');
});
$('span.list_view_btn').on('click',function(){
    $('.product_info_section').removeClass('grid_view');
});

//
//$('.favorite_btn').on('click',function(){
//    $('.favorite_btn i').toggleClass('fa-heart-o').css('color',"#fed518");
//});
$('.favorite_btn').click(function() {
    $('.favorite_btn i').toggleClass('fa-heart-o').css('color',"#ffffff");
},function() {
    $('.favorite_btn i').toggleClass('fa-heart-o').css('color',"#fed518");
});

// $(document).ready(function(){
//
//     $(".basic").jRating({
//         length:5,
//         canRateAgain : true,
//         nbRates : 1000,
//         decimalLength:1,
//         sendRequest: false,
//         onSuccess : function(){
//
//             //alert('Success : your rate has been saved :)');
//         },
//         onError : function(){
//             alert('Error : please retry');
//         }
//     });
//
// });


$('.next_button').on('click',function(){
    $('.checkout_step.current').removeClass('current').next().addClass('current');
});
$('.prev_button').on('click',function(){
    $('.checkout_step.current').removeClass('current').prev().addClass('current');
});