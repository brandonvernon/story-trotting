COLLECTION_NAME = "poi"
var DEBUG = {
  enabled:false,
  payload:{
    id:"texas-library-queen",
    sources:["nbc.com"],
    tags:["a","b"],
    collection:["b","c"]
  },
  collection:"test_poi"
}

/**
 * Edit POI
 * 
 * @param {POI} changes changeset of key/values,ex {"name":"yolo","image_url":"https://newimages.com"}
 */
function UpdatePOI(req, resp) {
  var changes = DEBUG.enabled ? DEBUG.payload : req.params
  var id = req.params.id
  delete changes.id

  var newRow = DBUtil.serialize(changes)
  resp.success(typeof newRow.collection)
  var collectionName = DEBUG.enabled ? DEBUG.collectionName : COLLECTION_NAME
  ClearBlade.init({request:req})
  ClearBlade.Query({collectionName}).equalTo('id',id).update(changes, callback)
  
  function callback(err, data){
    if(err){
      var msg = "Unable to update POI '" + id + "' due to: " + JSON.stringify(data)
      log(msg); resp.error(data)
    }
    log({response:data})
    resp.success(data)
  }
}
