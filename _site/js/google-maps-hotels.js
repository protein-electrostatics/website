/*
 * declare map as a global variable
 */
var map;

/*
 * use google maps api built-in mechanism to attach dom events
 */
google.maps.event.addDomListener(window, "load", function () {

  /*
   * create map
   */
  var map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(44.405882,8.9439043),
    zoom: 13,

      // Google maps style

      styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#004622"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
],

    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  /*
   * create infowindow (which will be used by markers)
   */
  var infoWindow = new google.maps.InfoWindow();

  /*
   * marker creater function (acts as a closure for html parameter)
   */
  function createMarker(options, html) {
    var marker = new google.maps.Marker(options);
    if (html) {
      google.maps.event.addListener(marker, "click", function () {
        infoWindow.setContent(html);
        infoWindow.open(options.map, this);
      });
    }
    return marker;
  }

  /*
   * add markers to map
   */

    var image = {
        url: '', // image is 512 x 512
        scaledSize : new google.maps.Size(50, 50),
    };

  var marker0 = createMarker({
    position: new google.maps.LatLng(44.412823, 8.929982),
    map: map,
  }, "Hotel Cairoli ★★★<br/><a href='https://www.hotelcairoligenova.com/en/'>See More</a>");

  var marker1 = createMarker({
    position: new google.maps.LatLng(44.413490, 8.928708),
    map: map,
  }, "Hotel Helvetia ★★★<br/><a href='https://www.hotelhelvetiagenova.it/'>See More</a>");

  var marker2 = createMarker({
    position: new google.maps.LatLng(44.410022, 8.934915),
    map: map,
  }, "Best Western Hotel Metropoli ★★★<br/><a href='https://www.hotelmetropoli.it/'>See More</a>");

  var marker3 = createMarker({
    position: new google.maps.LatLng(44.411431, 8.928333),
    map: map,
  }, "Hotel De Ville ★★★★ <br/><a href='https://hoteldeville.it/'>See More</a>");

  var marker4 = createMarker({
    position: new google.maps.LatLng(44.406913, 8.936349),
    map: map,
  }, "Hotel Bristol Palace ★★★★<br/><a href='https://www.hotelbristolpalace.it/it'>See More</a>");

  var marker5 = createMarker({
    position: new google.maps.LatLng(44.416278, 8.923976),
    map: map,
  }, "Hotel Nuovo Nord  ★★★<br/><a href='https://www.hotelnuovonord.com/'>See More</a>");


});
