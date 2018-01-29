$(document).ready(function() {
  $('form#quiz').on('submit', function(event) {
    event.preventDefault()

    let hexagon = $("input[type='radio'][name='hexagon']:checked").val();
    let car = $("input[type='radio'][name='car']:checked").val();
    let sky = $("input[type='radio'][name='sky']:checked").val();

    $('#results').append(`<p>Your answer for Hexagon is ${hexagon}</p>`)
    $('#results').append(`<p>Your answer for Car is ${car}</p>`)
    $('#results').append(`<p>Your answer for Sky is ${sky}</p>`)
  })
})
