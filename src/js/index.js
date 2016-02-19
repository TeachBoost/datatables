( function ( $ ) {
    'use strict';

    $.fn.dataTable = function ( data, options, callback ) {
        if ( arguments.length > 0 ) {
            // console.log( 'this: ', this );
            // console.log( 'data: ', data );
            return this;
        }
        else {
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


var $table = $( App.Templates[ './src/html/views/table.html' ]( { data: widgetData, frameworks: frameworks } ) );
var $body = $( 'body' );


$body.append( $table );
$table.dataTable();
sparklines( '.sparkline' );
if ( widgetData.options.tree ) {
    $table.treeFy({
        expanderExpandedClass: 'fa fa-minus',
        expanderCollapsedClass: 'fa fa-plus',
        initStatusClass: 'treetable-collapsed'
    });
}
// if ( widgetData.options.fixed.cols > 0 || widgetData.options.fixed.rows > 0 ) {
//     $table.fxdHdrCol({
//             fixedCols:  widgetData.options.fixed.cols,
//             width:     '100%',
//             height:    400,
//             colModal: [
//                    { width: 50, align: 'center' },
//                    { width: 110, align: 'center' },
//                    { width: 170, align: 'left' },
//                    { width: 250, align: 'left' },
//                    { width: 100, align: 'left' },
//                    { width: 70, align: 'left' },
//                    { width: 100, align: 'left' },
//                    { width: 100, align: 'center' },
//                    { width: 90, align: 'left' },
//                    { width: 400, align: 'left' }
//             ],
//             sort: false
//         });
// }
