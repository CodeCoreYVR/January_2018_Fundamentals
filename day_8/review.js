// good evening everyone!
// jquery
// john resig
// write less do more

// download the library
// CDN and get jquery

$(); // <- check if jquery installed

// $(<css selector>);
// $(object);
$(function() {}); // checking if the document is ready

$(document).ready(function() {

});

// ??? why do we have to wait for the document to be ready???
// because HTML is interpreted from the top to the bottom


$('#form-1').submit(function(event){
	event.preventDefault();
	console.log( $('input[type=text]').val() );
  $('#form-message').html( $('input[type=text]').val() );
});







//
