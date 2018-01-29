$(document).ready(function() {
  // Toggle Class
  $("input[type='submit']").on("click", function() {
    $(this).toggleClass("btn-primary btn-danger");
  })

  // Key Logger
  $("input[name='name']").keyup(function() {
    var textInput = $(this).val();

    $("#message").text(textInput)
  });

  // Personal Info
  $("form#info").on("submit", function(event) {
    event.preventDefault();

    var formData = $('form').serializeArray()
    var result = []

    for(let input of formData) {
      result.push(input.name + ": " + input.value)
    }

    $("#display").text(result.join(", "))

    $("form#info").trigger("reset")
  })
});
