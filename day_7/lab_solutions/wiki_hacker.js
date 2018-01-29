// Go to http://en.wikipedia.org/wiki/Justin_Bieber in your browser.

// Write some jQuery to change the title of the article to Your Name.
$('#firstHeading').text('Joel Bellavance')

// Write some jQuery to hide the body of the article
$('#mw-content-text').hide()

// Write some jQuery to remove the wikipedia logo
$('.mw-wiki-logo').hide()
$('.mw-wiki-logo').css('background-image', 'none')

// Write some jQuery to change the image on the right hand side to a different picture
// Chrome is sometimes weird, it may work differently for you all. You may have to
// change the src and srcset attribute
$('table.infobox a.image img').attr("src","https://static.tvtropes.org/pmwiki/pub/images/ryangosling.jpg");
$('table.infobox a.image img').attr("srcset","https://static.tvtropes.org/pmwiki/pub/images/ryangosling.jpg");
