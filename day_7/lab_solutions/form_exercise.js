// Form Exercise
// Name Collector

// Create a user form with a text field and a submit button. As well create a
// table that will display the names entered. When the submit button is clicked:

// 1. prevent the default action of reloading the page: event.preventDefault();
// 2. get the text in the input text field using val();
// 3. populate the table with the name entered using append();

$(document).ready(function() {
  $('form#my-form').on('submit', function(event) {
    event.preventDefault()

    // this selects the input with the name 'brian'
    // .val() fetches the value inside of the input
    let textInput = $("input[name='brian']").val()

    // we take that value wrap it in table row and table cell tags
    // and then we append it to the table
    $('table#my-table').append(`<tr><td>${textInput}</td></tr>`)
  })
})
