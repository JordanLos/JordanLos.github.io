$( document ).ready(function() {

	$('.clickTab1').hover(function() {

		$( '.clickTab1' ).removeClass( 'focus' );
		$( this ).addClass( 'focus' );	

	});

	$('.clickTab2').hover(function() {

		$( '.clickTab2' ).removeClass( 'focus' );
		$( this ).addClass( 'focus' );	

	});

	$('.clickTab1').hover(function() {

		$( '.clickTarget1' ).css( "display", "none" );
		$( '.clickTarget1' ).eq( $( this ).index() ).css( "display", "block" );

	});
	$('.clickTab2').hover(function() {

		$( '.clickTarget2' ).css( "display", "none" );
		$( '.clickTarget2' ).eq( $( this ).index() ).css( "display", "block" );

	});
});
