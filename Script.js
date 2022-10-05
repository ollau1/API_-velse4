//Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiZW1pbDM3MnIiLCJhIjoiY2w3YTN1bG1oMHB6YzNvb2x6a2pmNDQ2NCJ9.xTMYm8E_eWIYTcp-gwnHVw';

//Her laver jeg selve kortet med css fra mapbox.
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [12.554729, 55.70651],
zoom: 12
})

//her giver jeg data til hvor markerne skal placeres henne og hvilken type de er.
const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [12.554729, 55.70651]
        },
        properties: {
          title: 'Mapbox',
          description: 'TEST 1'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [13.554729, 55.70651]
        },
        properties: {
          title: 'Mapbox',
          description: 'TEST 2'
        }
      }
    ]
  };
//her bliver markersne lavet og placeret på kortet.
for (const feature of geojson.features) {
    const el = document.createElement('div');
    el.className = 'marker';
  
    new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
  }