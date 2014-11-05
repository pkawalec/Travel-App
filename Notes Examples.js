










function flicker() {

$('#searchinput').bind('keypress', function(e) {
    	if (e.keyCode == 13) {
                
       var searches = "";
        $("#searchinput").each(function (index) {

            searches += $(this).val() + "+";
        });

        $("h1").remove();

         $("#imagesResult img").remove();
        var term = searches;
        var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8b010ef32af4006f4fac0249a746289e&tags=" + term +"&safe_search=1&per_page=100";
        var src;
        $.getJSON(url + "&format=json&jsoncallback=?", function (data) {

            if (data.photos.photo.length === 0) {

                $("<img/>").attr("class", 'error').appendTo("#imagesResult");
         
                $(".error").attr("src", "../img/icons/graph.png").appendTo("#imagesResult");
          
            }
            $.each(data.photos.photo, function (i, item) {
                src = "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_m.jpg";
            
                $("<img/>").attr("src", src).appendTo("#imagesResult");
                 
      
         

                if (i == 1000) {
                    return false;
                }
            });
        });
			}
	});
