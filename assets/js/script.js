$( document ).ready(function() {

	$('.clickTab').click(function() {
		$( this ).addClass( "focus" );
		$( '.clickTab' ).not( $( this ) ).removeClass( 'focus' );
		
		var self  = $( this ).index();
		var	matchedTarget = $( '.clickTarget' ).eq(self);

		matchedTarget.css("display", "block" );

		if ($( this ).index() <= 2)
			$( '#park, #beach, #zoo' ).not(matchedTarget).css("display", "none");
		else 
			$( '#mon, #tues, #wed' ).not(matchedTarget).css("display", "none");
		

	//need to refactor the HTML


	});

	$('.clickTab').hover(function() {
		$( this ).addClass( "focus" );
		$( '.clickTab' ).not( $( this ) ).removeClass( 'focus' );
		
		var self  = $( this ).index();
		var	matchedTarget = $( '.clickTarget' ).eq(self);

		matchedTarget.css("display", "block" );

		if ($( this ).index() <= 2)
			$( '#park, #beach, #zoo' ).not(matchedTarget).css("display", "none");
		else 
			$( '#mon, #tues, #wed' ).not(matchedTarget).css("display", "none");
		

	//need to refactor the HTML


	});

});
