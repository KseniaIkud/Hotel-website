function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
    
    $( function() {
      $("#slider-range").slider({
        range: true,
        min: 200,
        max: 15700,
        values: [ 5000, 10000 ],
        slide: function( event, ui ) {
            $( "#amount" ).val(numberWithSpaces(ui.values[ 0 ]) + "₽ - " + numberWithSpaces(ui.values[ 1 ]) + "₽" );  
        }
      });
      $("#amount" ).val(numberWithSpaces($( "#slider-range" ).slider( "values", 0 )) + "₽ - " + numberWithSpaces($( "#slider-range" ).slider( "values", 1 ))+ "₽" );
    } );