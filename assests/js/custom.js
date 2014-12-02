var searches = "";
var xmlHttp;
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
            callIrishRail();
            weather(searches);
        }
        resizeMap();
	});

function weather(searches = 'cork'){    
    if(document.getElementById('weatherImage').innerHTML != ""){   
        document.getElementById('weatherImage').innerHTML = "";
    }
    var con = searches;
    var country = 'ie';
    var url = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + con  + "," + country+"')&format=json&callback=yqlCallback";
 
    window['yqlCallback'] = function(data) {     
     var sunRise= data.query.results.channel.astronomy.sunrise;
     var sunSet = data.query.results.channel.astronomy.sunset;
     var country = data.query.results.channel.location.country;
     var city = data.query.results.channel.location.city;
     var weatherCode = data.query.results.channel.item.condition.code;        
     var weatherDesription = data.query.results.channel.item.condition.text;
     var weatherDesriptionFull = data.query.results.channel.item.description;
        
        //Weather for the next few days.
     $('#weatherImage').append(weatherDesriptionFull);
        
        
        // Just the weather image by themselfs.
    // $('#weatherImage2').append('<img src="http://l.yimg.com/a/i/us/we/52/'    +  weatherCode+ '.gif" />');

 };
 
    $.ajax({
        url: url,
        dataType: 'jsonp',
        cache: true,
        jsonpCallback: 'yqlCallback'
    });
     
}

function callIrishRail(){   
    ///call irish train API 
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();  
    }else{
        alert("Your browser is not supported");
    }
    xmlHttp.onreadystatechange = function(){
        
        if(xmlHttp.readyState==4 && xmlHttp.status==200){
            
            //var restext = xmlHttp.responseText;
            var res = xmlHttp.responseXML;    
            refactorTimeTable(res);
            }
        }
    xmlHttp.open("GET", "../file.xml?="+Math.random(), true);
    xmlHttp.send();
    
}
weather();
function resizeMap(){
       
    var map = document.getElementById('map-canvas');
        var flickerHeight = document.getElementById("flickerContainer").offsetHeight;
        var mapHeight = document.getElementById('map-canvas').offsetHeight;
        if(flickerHeight > mapHeight){
            document.getElementById('map-canvas').style.height = flickerHeight + 'px';
             google.maps.event.trigger(map, "resize");
        }

}

function refactorTimeTable(res){
    var str = "";
    var objstationdata = res.documentElement.childNodes;
    for(var i=0; i<objstationdata.length; i++){
        str += "<h3>";
        str += objstationdata[i].childNodes[6].childNodes[0].nodeValue;
        str += "<span> - </span>";
        str += objstationdata[i].childNodes[7].childNodes[0].nodeValue;
        str += "</h3><p>Departure: <span class='dep'>";
        str += objstationdata[i].childNodes[8].childNodes[0].nodeValue;
        str += "</span> Arrival: <span class='arrival'>";
        str += objstationdata[i].childNodes[9].childNodes[0].nodeValue;
        str += "</span></br>Due in: ";
        str += objstationdata[i].childNodes[12].childNodes[0].nodeValue;
        str += "min(s), Late: ";
        str += objstationdata[i].childNodes[13].childNodes[0].nodeValue;
        str += "min(s)</p>";  
    }
     var container = document.getElementById('timeTable');
    container.innerHTML = str;
}
document.getElementById('hideBtn').addEventListener('click', onHideWidgetClick, false);