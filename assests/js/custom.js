document.getElementById('hideBtn').addEventListener('click', onHideWidgetClick, false);
document.getElementById('submit');

function onHideWidgetClick(){
	$('#flickerContainer').slideToggle();
	$('#weatherContainer').slideToggle();
	if($(this).text() === 'Hide widgets'){
		$(this).text('Show widgets');
	} else {
		$(this).text('Hide widgets');
	}	
}



$('#searchinput').bind('keypress', function(e) {

    	if (e.keyCode == 13) {
                
       var searches = "";
        $("#searchinput").each(function (index) {

            searches += $(this).val() + "+";
        });

        $("h1").remove();

         $("#flickerContainer img").remove();
        var term = searches;
        var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8b010ef32af4006f4fac0249a746289e&tags=" + term +"&safe_search=1&per_page=100";
        var src;
        $.getJSON(url + "&format=json&jsoncallback=?", function (data) {

            if (data.photos.photo.length === 0) {

                $("<img/>").attr("class", 'error').appendTo("#flickerContainer");
         
                $(".error").attr("src", "../img/icons/graph.png").appendTo("#flickerContainer");
          
            }
            $.each(data.photos.photo, function (i, item) {
                src = "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_m.jpg";
            
                $("<img/>").attr("src", src).appendTo("#flickerContainer");
                 
      
         

                if (i == 4) {
                    return false;
                }
            });
        });
			}
    document.getElementById('body').style.height = "200%";
	});
//-----------------------------

