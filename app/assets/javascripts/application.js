  var id = null;
  var defaultLabelText = "Selected Post Id is : "
$(function() {

$( "#dialog-form" ).dialog({
autoOpen: false,
height: 300,
width: 350,
modal: true,
buttons: {
"Save": function() {
  $( this ).dialog( "close" );
  id = "";

},
Cancel: function() {
$( this ).dialog( "close" );
id = "";

}
},
close: function() {
$( this ).dialog( "close" );
id = "";

}
});

$( "#promote-post" )
.button()
.click(function() {

id = jQuery( 'input[name=post]:checked' ).val()


$("#id").text(defaultLabelText + id );


$( "#dialog-form" ).dialog( "open" );
});
});