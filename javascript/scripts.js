"use strict";

function initMap() {
  let leicester = {lat: 52.6333, lng: -1.1333};
  let dmu = {lat: 52.629311, lng: -1.137836};
  let rsb = {lat: 52.629307, lng: -1.136229};
  let mapDemo = document.getElementById("map");

  // this sets the default location for when the map is first loaded
  let map = new google.maps.Map(mapDemo, {
    zoom: 13,
    center: leicester
  });

  // these set different markers you want to show on your map
  let markerDMU = new google.maps.Marker({
    position: dmu,
    map: map,
    title: 'Uni Location'
  });
  let markerRSB = new google.maps.Marker({
    position: rsb,
    map: map,
    title: 'Rileys Location'
  });
}
