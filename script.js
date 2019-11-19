  $( function() {
    $( "#accordion" )
      .accordion({
        header: "> div > h3",
        icons: true
      })
      .sortable({
        axis: "y",
        handle: "h3",
        stop: function( event, ui ) {
          // IE doesn't register the blur when sorting
          // so trigger focusout handlers to remove .ui-state-focus
          ui.item.children( "h3" ).triggerHandler( "focusout" );
 
          // Refresh accordion to handle new order
          $( this ).accordion( "refresh" );
        }
      });
  } );

 $(function () {
     var icons = {
         header: "ui-icon-plus",    // custom icon class
         activeHeader: "ui-icon-minus" // custom icon class
     };
     $("#accordion").accordion({
         icons: icons
     });
 });