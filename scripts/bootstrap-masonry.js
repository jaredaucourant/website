// Load is used to ensure all images have been loaded, impossible with document

$( window ).load( function() {



    // Takes the gutter width from the bottom margin of .project-cover

	var gutter = parseInt( jQuery( '.project-cover' ).css( 'marginBottom' ) );
	var container = jQuery( '#project-index' );



	// Creates an instance of Masonry on #project-index

	container.masonry({
		gutter: gutter,
		itemSelector: '.project-cover',
		columnWidth: '.project-cover'
	});
	
	
	
	// This code fires every time a user resizes the screen and only affects .project-cover elements
	// whose parent class is .container-fluid. Triggers resize so nothing looks weird.
	
	jQuery( window ).bind( 'resize', function(){
		if ( jQuery( '#project-index' ).parent().hasClass( 'container-fluid' ) ) {
			
			
			
			// Resets all widths to 'auto' to sterilize calculations
			
			project_width = jQuery( '.project-cover' ).width() + gutter;
			jQuery( '.container-fluid #project-index, body > .container-fluid' ).css( 'width', 'auto');
			
			
			
			// Calculates how many .project-cover elements will actually fit per row. Could this code be cleaner?
			
			projects_per_row = jQuery( '#project-index' ).innerWidth() / project_width;
			floor_projects_width = ( Math.floor( projects_per_row ) * project_width ) - gutter;
			ceil_projects_width = ( Math.ceil( projects_per_row ) * project_width ) - gutter;
			projects_width = ( ceil_projects_width > jQuery( '#project-index' ).innerWidth() ) ? floor_projects_width : ceil_projects_width;
			if ( projects_width == jQuery( '.project-cover' ).width() ) projects_width = '100%';
			
			
			
			// Ensures that all top-level .container-fluid elements have equal width and stay centered
			
			jQuery( '.container-fluid #project-index, body > .container-fluid' ).css( 'width', projects_width );
			jQuery( 'body > .container-fluid' ).css({ 'margin': '0 auto' });
		
		
		
		}
	}).trigger( 'resize' );
	


});