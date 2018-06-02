var Configuration = {
	DEBUG: true,
	DEBUG_PAYLOAD: 
	[
	    {
        "data": {
            "description": "Site Supervisor",
            "id": "",
            "item_id": "0118829e-a0c7-4147-aa4d-0a90cea2c932",
            "last_updated": "2017-07-31T16:22:13.331Z",
            "lat": 40.75498657132572,
            "long": -74.00346569419297,
            "type": "supervisor"
        }
    },
    {
        "data": {
            "description": "Internet-enabled Construction Equipment",
            "id": "",
            "item_id": "01552171-492a-4609-9e63-6a0eeb85a84f",
            "last_updated": "2017-07-31T16:22:13.331Z",
            "lat": 40.754355287150105,
            "long": -74.00281933553157,
            "type": "tool"
        }
    },
    {
        "data": {
            "description": null,
            "id": "2b",
            "item_id": "015e90d2-0064-4ea6-afc9-65c20dea03ce",
            "last_updated": "2018-05-18T21:10:08.653Z",
            "lat": 30,
            "long": -97,
            "type": null
        }
    },
    {
        "data": {
            "description": "Internet-enabled Construction Equipment",
            "id": "",
            "item_id": "01674588-c0c7-464f-a396-a3d4eb0c8fe9",
            "last_updated": "2017-07-31T16:22:13.331Z",
            "lat": 40.754549191025546,
            "long": -74.00403921262728,
            "type": "tool"
        }
    },
    {
        "data": {
            "description": "Bridgeton Construction Employee",
            "id": "",
            "item_id": "019ac799-d0bb-49ff-b473-ace2bd7e0acb",
            "last_updated": "2017-07-31T16:22:13.331Z",
            "lat": 40.75527205843725,
            "long": -74.00394654069638,
            "type": "contractor"
        }
    },
    {
        "data": {
            "description": "Site Supervisor",
            "id": "",
            "item_id": "01a2a046-919a-4fc7-bd9f-f50b880bff13",
            "last_updated": "2017-07-31T16:22:13.331Z",
            "lat": 40.75553807392197,
            "long": -74.00565755736416,
            "type": "supervisor"
        }
    }
	]
}
console.log("Startup")
function startup(){
  mapboxgl.accessToken = 'pk.eyJ1IjoicnJlaW5vbGQiLCJhIjoiY2lwOTllOGQ2MDB4Y2VhbnJnMWtzcW9qaiJ9.1mNTDQ5rwabgUL9onzaLxg';
  console.log("Accesstoken set")
var mapStyle = {
    "version": 8,
    "sources": {
        "mapbox": {
            "type": "vector",
            "url": "mapbox://mapbox.mapbox-streets-v6"
        },
        "overlay": {
            "type": "image",
            "url": "https://s3.amazonaws.com/uploads.hipchat.com/76688/3422574/tTzmeJiwTQJYFlP/map2.png",
            "coordinates": [
                [-74.005103, 40.756117],  // left up
                [-74.002707, 40.755101],  // right up 40.755101, -74.002707
                [-74.003893, 40.753532],  // right down 40.753532, -74.003893
                [-74.006406, 40.754437]   // left down 40.754437, -74.006406
            ]
        }
    },
    "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "water",
            "source": "mapbox",
            "source-layer": "water",
            "type": "fill",
            "paint": {"fill-color": "#2c2c2c"}
        },
        {
            "id": "boundaries",
            "source": "mapbox",
            "source-layer": "admin",
            "type": "line",
            "paint": {"line-color": "#797979", "line-dasharray": [2, 2, 6, 2]},
            "filter": ["all", ["==", "maritime", 0]]
        },
        {
            "id": "overlay",
            "source": "overlay",
            "type": "raster",
            "paint": {"raster-opacity": 0.85}
        },
        {
            "id": "cities",
            "source": "mapbox",
            "source-layer": "place_label",
            "type": "symbol",
            "layout": {
                "text-field": "{name_en}",
                "text-font": ["DIN Offc Pro Bold", "Arial Unicode MS Bold"],
                "text-size": {"stops": [[4, 9], [6, 12]]}
            },
            "paint": {
                "text-color": "#969696",
                "text-halo-width": 2,
                "text-halo-color": "rgba(0, 0, 0, 0.85)"
            }
        },
        {
            "id": "states",
            "source": "mapbox",
            "source-layer": "state_label",
            "type": "symbol",
            "layout": {
                "text-transform": "uppercase",
                "text-field": "{name_en}",
                "text-font": ["DIN Offc Pro Bold", "Arial Unicode MS Bold"],
                "text-letter-spacing": 0.15,
                "text-max-width": 7,
                "text-size": {"stops": [[4, 10], [6, 14]]}
            },
            "filter": [">=", "area", 80000],
            "paint": {
                "text-color": "#969696",
                "text-halo-width": 2,
                "text-halo-color": "rgba(250, 0, 0, 0.85)"
            }
        }
    ]
};
var map = new mapboxgl.Map({
    style: 'mapbox://styles/mapbox/light-v9',
    zoom: 15,
    pitch: 45,
    bearing: 50,
    hash: true,
    container: 'map',
    center: [-74.003795,40.754790], 
});
map.on('load', onLoad)
window.mapObj = map
    map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['devices'] });
    if (!features.length) {
        return;
    }
    var feature = features[0];
    console.log(feature);
    
    var popup = new mapboxgl.Popup()
        .setLngLat(map.unproject(e.point))
        .setHTML(generateDescription(feature.properties))
        .addTo(map);
});


function generateDescription(tag){
    var keys = Object.keys(tag)
    var lines = []
    for(var i in keys){
        var key = keys[i]
        lines.push('<b>'+key+'</b>: ' + tag[key])
    }
    return lines.join('<br>')
}

function onLoad(){
	addImage()
	addWorkers()
}
function addImage(){
    console.log("executing addImage")
    
// Insert the layer beneath any symbol layer.
    var layers = window.mapObj.getStyle().layers.reverse();
    var labelLayerIdx = layers.findIndex(function (layer) {
        return layer.type !== 'symbol';
    });
    var labelLayerId = labelLayerIdx !== -1 ? layers[labelLayerIdx].id : undefined;
    window.mapObj.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': {
                'type': 'identity',
                'property': 'height'
            },
            'fill-extrusion-base': {
                'type': 'identity',
                'property': 'min_height'
            },
            'fill-extrusion-opacity': .6
        }
    }, labelLayerId);
    window.mapObj.addSource("overlay",{
            "type": "image",
            "url": "https://s3.amazonaws.com/uploads.hipchat.com/76688/3422574/tTzmeJiwTQJYFlP/map2.png",
            "coordinates": [
                [-74.004825, 40.757022],  // left up 40.757022, -74.004825
                [-74.000947, 40.755226],  // right up 40.755226, -74.000947
                [-74.002528, 40.752858],  // right down 40.752858, -74.002528
                [-74.006787, 40.754590]   // left down 40.754590, -74.006787
            ]
        })
    window.mapObj.addLayer({
            "id": "overlay",
            "source": "overlay",
            "type": "raster",
            "paint": {"raster-opacity": .9}
        })

 }

 function generateGeoJSON(){
 	var collection =  Configuration.DEBUG ? Configuration.DEBUG_PAYLOAD : datasources.workers.latestData();

	var features = []
	for(var i = 0 ; i < collection.length ; i++){
		var goodStuff = collection[i].data
		var point = generateFeatures(goodStuff.long,goodStuff.lat,goodStuff)
		features.push(point)
	}

	return 	{
		"type":"geojson",
	 	"data":{
		       "type": "FeatureCollection",
		       "features": features,
		       "media_type":"iMessage"
   		}}
}

function generateFeatures(long, lat, row){

	 return {
	           "type": "Feature",
	           "geometry": {
					"type": "Point",
					"coordinates": [long, lat]
				},
				"properties":{
					"type":row.type,
					"description":row.description,
					"status":row.payload,
					"updated":row.last_updated
				}
				
	       }
}

function addWorkers(){
	var sourceObj = generateGeoJSON()
    window.mapObj.addSource("devices",sourceObj)

    window.mapObj.addLayer({
        "id": "devices",
        "type": "circle",
        "source": "devices",
        "paint": {
            "circle-radius": {
                "base": 1.7, // low is big
                // high is zoomed out
                "stops": [[11, 1], [18, 8],[19,8]]
            }
            ,
            'circle-color': {
                property: 'type',
                type: 'categorical',
                stops: [
                    ["tool", '#ffe62d'], 
                    ["contractor", '#4ae065'], 
                    ['supervisor', '#ff3838']]
            }
        }
	});
	}
}
