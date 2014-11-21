

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var userLocation;
var userDestination;

function initialize() {
  
  
  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      userLocation = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: userLocation
      });

      map.setCenter(userLocation);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
  
  
  var rendererOptions = {
  draggable: true
};

  
  
  directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
  
  var mapOptions = {
    zoom:10,
    center: userLocation
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);
   google.maps.event.addListener(directionsDisplay, 'directions_changed', function() {
    computeTotalDistance(directionsDisplay.getDirections());
  });

  calcRoute();


}

function calcRoute() {
  userDestination = document.getElementById('searchinput').value;
  if(userDestination === null || userDestination === ""){
    userDestination = userLocation;
  }
  var request = {
      origin:userLocation,
      destination:userDestination,
      travelMode: google.maps.TravelMode.DRIVING,
    provideRouteAlternatives: true,
    
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}
function computeTotalDistance(result) {
  var total = 0;
  var myroute = result.routes[0];
  for (var i = 0; i < myroute.legs.length; i++) {
    total += myroute.legs[i].distance.value;
  }
  total = total / 1000.0;
  document.getElementById('total').innerHTML = total + ' km';
}

google.maps.event.addDomListener(window, 'load', initialize);

