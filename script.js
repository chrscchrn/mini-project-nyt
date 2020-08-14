// Declare variable to URL and Searches
var search = "#"
var startYear = "#"
var endYear = "#"
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=pAtLmykIPaLDyQ7tuxsgAfZNroTJHQCH"
console.log(queryURL);
// Send for response
$.ajax({
  url: queryURL,
  method: "GET"
})
  .then(function(response)
{
  console.log(response);

  $(".search").text("Article " + response.article);
  $(".startYear").text("Start year: " + response.startYear);
  $(".endYear").text("End year: " + response.endYear);
}