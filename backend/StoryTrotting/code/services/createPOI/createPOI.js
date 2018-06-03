COLLECTION_NAME = "poi"
var DEBUG = {
  enabled: false,
  payload:{
       "address": "2313 Red River St, Austin, TX 78705",
       "collection": "['Lyndon B Johnson']",
       "description": "This is also where his wife lay in repose in July of 2007",
       "id": "lbj-library-repose",
       "images": "",
       "lat": 30.285797,
       "location_name": "Austin, TX",
       "long": -97.729343,
       "name": "delete dat thang",
       "owner": "douglessismore@gmail.com",
       "sources": "http://www.lbjlibrary.org/page/library-museum/memorable-moments-at-the-lbj-library",
       "tags": "[]",
       "timestamp": "1973-01-23T00:00:00Z",
       "timestamp_created": null,
       "timestamp_end": "1973-01-23T00:00:00Z"
  }
}
/**
 * @param {POI} pointOfInterest new point of interest to create
 * 
 * Generates ID with name
 */
function createPOI(req, resp) {
  ClearBlade.init({request:req})
  var row = DEBUG.enabled ? DEBUG.payload : req.params
  row.id = generateID(row.name)
  ClearBlade.Collection({collectionName:COLLECTION_NAME}).create(row,callback)

  function callback(err, data){
    if(err){
      var msg = "Unable to create row in " + COLLECTION_NAME + ": " + JSON.stringify(data)
      log(msg); resp.error(msg)
    }
    log("Created row")
    resp.success(data)
  }

  function generateID(name){
    var regex = /[^a-zA-Z0-9]/g
    var output = name.toLowerCase().replace(regex,'-');
    log({output})
    return output
  }
}
