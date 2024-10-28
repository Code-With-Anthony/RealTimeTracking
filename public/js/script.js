const socket = io();
const markerCluster = L.markerClusterGroup();

// Check if the browser supports geolocations
if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      socket.emit("send-location", { latitude, longitude });
    },
    (error) => {
      console.log("Geolocation error occurred:", error.message);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
}

// Initialize the map with maxZoom
const map = L.map("map", {
  maxZoom: 18, // Set your desired maximum zoom level
}).setView([0, 0], 10);
map.addLayer(markerCluster);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "Anthony Dourado",
}).addTo(map);

const markers = {};

socket.on("received-location", (data) => {
  const { id, latitude, longitude } = data;

  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude]);
  } else {
    markers[id] = L.marker([latitude, longitude]);
    markerCluster.addLayer(markers[id]);
  }

  const markerCoords = Object.values(markers).map((marker) =>
    marker.getLatLng()
  );
  if (markerCoords.length > 1) {
    map.fitBounds(markerCoords);
  } else {
    map.setView([latitude, longitude], 15);
  }
});

socket.on("user-disconnect", function (id) {
  if (markers[id]) {
    markerCluster.removeLayer(markers[id]); // Remove marker from the cluster
    delete markers[id];
  }
});
