var map = L.map('mapid', {
            crs: L.CRS.Simple,
            zoom: -1.8,
            minZoom:-1.8,
            maxZoom:1
        });

    map.setMaxBounds(new L.LatLngBounds([2319,0], [0,6507]));


    var bounds = [[0,0], [2319,6507]];
	var image = L.imageOverlay('././admin/upload/plan_1735.png', bounds).addTo(map);

	map.fitBounds(bounds);

	map.on('click', function(e) {
    console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);
});

	var immersaillesIcon = L.icon({
    iconUrl: '././img/marker.png',

    iconSize:     [38, 50],
    iconAnchor: [38/2,50],
    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});

	L.marker([1173.5021593231754, 2687.9863590540663], {icon: immersaillesIcon}).addTo(map).bindPopup("Grande salle des gardes");

	


        var div = L.DomUtil.get('noscroll');
  L.DomEvent.on(div, 'mousewheel', L.DomEvent.stopPropagation);
  L.DomEvent.on(div, 'click', L.DomEvent.stopPropagation);