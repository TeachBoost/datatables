( function ( $ ) {
    'use strict';

    $.fn.dataTable = function ( data, options, callback ) {
        if ( arguments.length > 0 ) {
            console.log( 'ONE build table' );
            // console.log( 'this: ', this );
            // console.log( 'data: ', data );
            // Build the title and buttons
            return this;
        }
        else {
            console.log( 'TWO instantiate existing table' );
            return this.each( function ( index, table ) {
                // console.log( 'index', index );
                // console.log( 'table', table );
            });
        }

    };

    $.fn.dataTable.foo = function ( bar ) {
        console.log( 'bar' );
    };


})( jQuery );


var $table2 = $( App.Templates[ './src/html/views/table.html' ]( widgetData ) );
var $body = $( 'body' );


// Method 1: build the table dynamically
$body.append( '<table class="one"> ');
$body.find( 'table.one' ).dataTable( widgetData );

// Method 2: make an existing HTML table in to a datatable
$table2.addClass( 'two' );
$body.append( $table2 );
$body.find( 'table.two' ).dataTable();
