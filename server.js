var require = require("require");
var cheerio = require("cheerio");

request("https://www.reddit.com", function (error, response, body){
  if(!error && response.statusCode == 200){
    $ = cheerio.load(body);

    $("p.title").each(function(i, elem){
      results.push({
        title: $(this).text(),
        link:"http://www.reddit.com" +
        $(this).children().attr("href")
     })
    });
  }

  console.log(results)
})