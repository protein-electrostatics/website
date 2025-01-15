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
    center: new google.maps.LatLng(38.75734606852652,-9.157184104092963),
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
    position: new google.maps.LatLng(38.74726359101594, -9.150363044576544),
    map: map,
  }, "VIP Executive Entrecampos Hotel & Conference ★★★★<br/><a href='https://www.vipentrecamposhotel.com/en/'>See More</a>");

  var marker1 = createMarker({
    position: new google.maps.LatLng(38.748832421976196, -9.149366358070987),
    map: map,
  }, "Hotel NH Lisboa Campo Grande ★★★★<br/><a href='https://www.nh-hotels.com/en/hotel/nh-lisboa-campo-grande'>See More</a>");

  var marker2 = createMarker({
    position: new google.maps.LatLng(38.75950472856518, -9.153715544576276),
    map: map,
  }, "Radisson Blu Hotel Lisbon ★★★★<br/><a href='https://www.radissonhotels.com/en-us/hotels/radisson-blu-lisbon'>See More</a>");

  var marker3 = createMarker({
    position: new google.maps.LatLng(38.74309242472702, -9.148139202246993),
    map: map,
  }, "VIP Inn Berna Hotel ★★★<br/><a href='https://www.vipbernahotel.com/en/'>See More</a>");

  var marker4 = createMarker({
    position: new google.maps.LatLng(38.74300472487096, -9.1501047310822),
    map: map,
  }, "VIP Executive Zurique Hotel ★★★<br/><a href='https://www.vipzuriquehotel.com/en/'>See More</a>");

  var marker5 = createMarker({
    position: new google.maps.LatLng(38.745546117340204, -9.159847358071133),
    map: map,
  }, "SANA Metropolitan Hotel ★★★★<br/><a href='https://www.sanahotels.com/hotel/sana-metropolitan/'>See More</a>");


});
