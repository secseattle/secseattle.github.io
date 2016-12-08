var map;

function initialize() {
  var myLatlng = new google.maps.LatLng(47.8039977,-122.3272297);
  var mapOptions = {
    zoom: 12,
	scrollwheel: false,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
	  animation: google.maps.Animation.DROP,
      title: 'Sterling Electrical Contractors'
  });

  var contentString = '<div class="info-window-content"><h2>Sterling Electrical Contractors</h2>'+
  					  '<h3>We separate ourselves from our competitors by placing our customers first.</h3>'+
					  '<p>We are located just off highway 99</p></div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

$('a[data-type="gmap"]').on('shown.bs.tab', function (e) {
  initialize();
})
