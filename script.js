/* Toggle between adding and removing the "responsive" class to navbar when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

var quotes = [
  '\"Achieving gender equality requires the engagement of women and men, girls and boys. It is everyone\’s responsibility.\" Ban Ki-moon',
  '\"A feminist is anyone who recognizes the equality and full humanity of women and men.\" Gloria Steinem',
  '\"If women are expected to do the same work as men, we must teach them the same things.\" Plato',
  '\"Justice is about making sure that being polite is not the same thing as being quiet. In fact, often times, the most righteous thing you can do is shake the table.\" Alexandria Ocasio-Cortez',
  '\"Don\'t let anyone rob you of your imagination, your creativity, or your curiosity.\" Mae Jemison',
  '\"Science is not a boy\'s game, it\'s not a girl\'s game.  It\'s everyone\'s game.\"',
];


function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
};

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
  };

document.getElementById("button").onclick = function(){
  newQuote();
  document.getElementById("button").style.visibility = "hidden"
  setTimeout(function(){
    document.getElementById("button").style.visibility = "visible"
  }, 1000);
};
