// Initialize and add the map
function initMap() {
    // Center the map on Uganda
    const ugandaCenter = { lat: 1.3733, lng: 32.2903 };
  
    // Create a new map centered on Uganda
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: ugandaCenter,
    });
  
    // List of Ugandan districts with example coordinates
    const districts = [
      { name: "Kampala", location: { lat: 0.3476, lng: 32.5825 } },
      { name: "Gulu", location: { lat: 2.7724, lng: 32.2881 } },
      { name: "Mbarara", location: { lat: -0.6075, lng: 30.6545 } },
      { name: "Jinja", location: { lat: 0.4248, lng: 33.2046 } },
      // Add more districts here
    ];
  
    // Loop through the districts and place a marker for each
    districts.forEach((district) => {
      const marker = new google.maps.Marker({
        position: district.location,
        map: map,
        title: district.name,
      });
  
      // Add an info window to each marker
      const infoWindow = new google.maps.InfoWindow({
        content: `<h4>${district.name}</h4><p>Coordinates: ${district.location.lat}, ${district.location.lng}</p>`,
      });
  
      // Open info window on marker click
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    });
  }
  