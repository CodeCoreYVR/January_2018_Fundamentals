const car = {
  speed: 50,
  drive() {
    console.log(`I am driving at ${ this.speed }km/h`);
  }
};

$('#orange-container').fadeOut(1000, function(){
  $(this).fadeIn();
});


// $(document)
// $(this)
// $('#orange-container')

$('.shape').click(function(){
  console.log( $(this) );
});

$('.shape').click(function(){
  $(this).hide();
});


$('.shape').click(function(){
  $(this).fadeOut();
});

$('.shape').click(function(){
 $(this).fadeOut(1000, function() {
   $(this).remove();
 });
});

$('.shape').mousedown(function() {
	console.log("mouse down");
	$(this).remove();
});

// mouseup
// keydown
// keyup
// keypress
// 








//
