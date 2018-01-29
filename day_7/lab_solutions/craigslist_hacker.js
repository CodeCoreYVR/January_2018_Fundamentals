// 1. Get the href attribute of the first link on the page.
$("a")[0].href

// 2. Get the number of links on this page.
$("a").length

// 3. Change the text for all links to be your name.
$("a").each(function(index, link) {
  $(this).text("Yeezy")
})

$("a").text('Yeezy')


// 4. Write some jQuery to make Craigslist"s logo link to http://www.google.com
$("#logo > a")[0].href = "http://www.google.com";
$("#logo > a").first().attr("href", "http://www.google.com")

$("a").each(function(index, link) {
  $(this).attr("href", "http://www.google.com")
})
