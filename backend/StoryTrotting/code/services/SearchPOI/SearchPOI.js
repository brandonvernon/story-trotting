COLLECTION_NAME = "poi"
DEBUG = {
  enabled:false,
  payload:{
    lat:30.231044,
    long: -97.757495,
    // collection:["Queen Elizabeth II"],
    tags:["Miller"]
  },
  collectionName:"test_poi"
}
/**
 * @param {string} sort - default:"popular" 
 * @param {string[]} collections - Filter by Collections, ex ['Willie Nelson']
 * @param {string} radius - Filter by radius, in meters, ex 400
 * @param {string[]} tags - Filter by tags, ex ['music','travel']
 * @param {number} lat Latitudinal center of search, in decimal, ex 70.10343
 * @param {number} long Longitudinal center of search, in decimal, ex 34.444
 * @return {POI[]} pointsOfInterest Points of interest within range
 */
function SearchPOI(req, resp) {
    ClearBlade.init({request:req})
    var collectionName = DEBUG.enabled ? DEBUG.collectionName : COLLECTION_NAME
    var params = DEBUG.enabled ? DEBUG.payload : req.params
    var lat = params.lat
    var long = params.long
    log({lat, long})
    var query = buildQuery(params)
    query.fetch(callback)

    function buildQuery(params){
      var radius = params.radius ? radius : Configuration.defaultRadiusMeters
      var rectangle = GeospatialUtil().generateGeoRectangle(params.lat, params.long, radius)

      var q = ClearBlade.Query({collectionName})
                .greaterThan( 'lat',rectangle.lat.min)
                .lessThan(    'lat',rectangle.lat.max)
                .greaterThan( 'long',rectangle.long.min)
                .lessThan(    'long', rectangle.long.max)

      // TODO impl multiple
      if(params.tags){

        q.matches('tags',params.tags[0])
        // loop thru tags
        // weird OR thang
      }
      // TODO impl multiple
      if(params.collection){
        q.matches('collection',params.collection[0])
        // loop thru tags
        // weird OR thang
      }
      log({q})
      return q
      
    }


    function callback(err, data){
      if(err){
        var msg = "Unable to fetch POIs: " + JSON.stringify(data)
        log(msg); resp.error(msg)
      }
      resp.success(data)
    }

}
