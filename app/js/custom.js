$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	// $('input, textarea').each(function(){
 	// 	var placeholder = $(this).attr('placeholder');
 	// 	$(this).focus(function(){ $(this).attr('placeholder', '');});
 	// 	$(this).focusout(function(){
 	// 		$(this).attr('placeholder', placeholder);
 	// 	});
 	// });

	
	/* components */
    $(function() {
        $('input, select').styler({
            selectSearch: true,
        });
    });
    $('.category-click').on('click', function () {
    	if (!$('.category-drop').hasClass('category-active')){
            $('.category-drop').addClass('category-active');
		}else {
            $('.category-drop').removeClass('category-active');

        };
    });

	$('.posts-slider').slick({
		dots: true,
		infinite: true,
		appendArrows: $('.slider-nav_arrows'),
		appendDots:$('.slider-nav_dots'),
		speed: 300,
		slidesToShow: 3,
        variableWidth: false,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 900,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
			  	breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
    // $('.posts-slider').slick({
    //     appendArrows: $('.slider-nav_right'),
	//
	// });
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"y",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};

	
	/* components */
	
	

});

var handler = function(){

	var height_footer = $('footer').height();
	var height_header = $('header').height();
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	if (viewport_wid <= 991) {

	}

}
$(window).bind('load', handler);
$(window).bind('resize', handler);



