// JavaScript Document
$(document).ready(function(){
  $('.barra').slick({
	slidesToShow: 6,
	arrows: true,
	  dots:true,
	infinite: false,
  });

	$( ".cerrar" ).on( "click", function() {
		$('.barra , .cerrar').toggleClass('hide');
		
	});
	
});