$(document).ready(function(){
  getQuote();
  
  var randomQuote;
  var author;
  function getQuote(){
   /* var quotes = ["BONJOUR !","HOLA !","GUTEN TAG !","OLA !","CIAO !","NAMASTE !","CZEŚĆ !"]
    var ranA=["-France","-Spanish","-German","-Portuguese","-Italian","-Hindi","-Polish"]
    
     randomNum=Math.floor((Math.random()*quotes.length));
     randomQuote=quotes[randomNum];
     author=ranA[randomNum];
    
   $(".quote").text(randomQuote);
    $(".author").text(author);*/
    var url="http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function(data){
      $(".quote").html('"'+data.quoteText+'"');
      $(".author").html('-'+data.quoteAuthor+'.');
    
    randomQuote= data.quoteText;
    author= data.quoteAuthor;
    });
  }
  $("#twiter").on("click",function(){
    window.open("https://twitter.com/intent/tweet?text="+randomQuote+'-'+author );
                   });  
  $("#newQuote").on("click", function(){
    getQuote();
  }) ; 
  
  });
    
    
    
  
