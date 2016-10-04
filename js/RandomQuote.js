var currentQuote = '';
var currentAuthor = '';	

var colorWheel = ['D54324','DE712C','CC2B8E','88AD1C','9117E5','6C9246','BF360D','2397B8','DE8709','855005','DD2C01','9B3118','035F9A','CFA323','E7AD06','B71C1F','0F5F61','5D486D','7E0CD5','DE1404','DB135A','9D063C','D92B3E','8A1D29','006E7C','1D4F55','BA7F16','6C4705','284907','747A06'];	
				
function displayQuote(){
	$.ajax({
		url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
		type: 'POST', // The HTTP Method
		data: {
			"cat": "famous"
		}, // Additional parameters here
		dataType: 'json',
		success: function(data) {
		  var quoteJson = JSON.stringify(data);
		  var obj = JSON.parse(quoteJson);
		  currentQuote = obj.quote;
		  currentAuthor = obj.author;
		 
		 $("#quoteDisplay").html(currentQuote); 
		 $("#authorDisplay").html(currentAuthor);
	},
	
		error: function(err) { alert(err); },
		beforeSend: function(xhr) {
		xhr.setRequestHeader("X-Mashape-Authorization", "FFxG9qVTvxmshnTo0PXN086k10Oup1aznoqjsnhycBE5UNP9IF"); 
		}
	}); //ajax
	
	//Choosing a random color
	var color = '#' + colorWheel[Math.floor(Math.random() * colorWheel.length)];
	//Applying color to css elements
	$('.brand').css('background-color', color);
	$('.text-cursive').css('color', color);
	$('.btn.btn-custom').css('background-color', color);
	$('.fa-twitter').css('color', color);
	$('.fa-quote-left').css('color', color);
	$('cite').css('color', color);
}

function displayTweet(){
	var tweetQuote = $("#quoteDisplay").text();
	var tweetAuthor = $("#authorDisplay").text();
	
	var tweetText = '"' + tweetQuote + '" - ' + tweetAuthor;
	var tweetLink = "https://twitter.com/intent/tweet?hashtags=quotes,freecodecamp&text=" + encodeURIComponent(tweetText);

	$(".twitterLink").attr("href", tweetLink);
}

$(document).ready(function() {
	//displayQuote();  //Quote displayed with page load
    $("#getQuote").on("click", displayQuote);
	$("#getTweet").on("click", displayTweet);
});