$(function(){
  $('ol').sortable();
  $('ol').disableSelection();

  $('button').click(function(){
    console.log("save!" + $('li').text());
  });
});
