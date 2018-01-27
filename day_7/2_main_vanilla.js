// setTimeout
// setInterval

// window.onLoad = function() {
//   document.write("Jacob was here");
//   // 1. select it
//   // 2. edit it's inner html
//   // document.getElementByTagName();
//   // document.getElementByClass();
//   const element = document.getElementById("title");
//
//   // element return as an object
//   // element.innerHTML; // get the text
//   element.innerHTML = "Tyler was here"; // set the text
// };
//
document.addEventListener("DOMContentLoaded", function() {
  //document.write("Jacob was here");
  // 1. select it
  // 2. edit it's inner html
  // document.getElementByTagName();
  // document.getElementByClass();
  const element = document.getElementById("title");

  // element return as an object
  element.innerHTML; // get the text
  element.innerHTML = "Tyler was here"; // set the text
});

$(function(){
  $('#title').html("Tyler was here");
});
