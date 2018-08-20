function initMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: {
            lat: 51.380950,
            lng: -0.28225620
        },
        zoom: 17
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    // add marker 
    var marker = new google.maps.Marker({
        position: {
            lat: 51.380950,
            lng: -0.28225620
        },
        map: map
    });
    // info window 
    var infoWindow = new google.maps.InfoWindow({
        content: "<strong>La Fratelli Restaurant</strong><br>41 Tolworth Broadway<br>Surbiton<br>KT6 7DJ<br>Tel: 020 8399 7797<br><a href='https://goo.gl/maps/Chts8b9qqmF2' target='parent'>View on Google Maps</a>"
    });
    infoWindow.open(map, marker);
    marker.addListener("click", function () {
        infoWindow.open(map, marker);
    });
    google.maps.event.addDomListener(window, 'load', initMap);
}