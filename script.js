$(document).ready(function(){
  getQuote();
  
  var randomQuote;
  var author;
  function getQuote(){
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
    
    
    
  
