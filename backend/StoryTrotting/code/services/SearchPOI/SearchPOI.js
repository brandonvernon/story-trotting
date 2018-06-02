DEBUG = true
COLLECTION_NAME = "poi"
DEBUG_PARAMS = {
  lat:30.231044,
  long: -97.757495,
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
    var params = DEBUG ? DEBUG_PARAMS : req.params
    var lat = params.lat
    var long = params.long
    log({lat, long})
    var query = buildQuery(params)
    query.fetch(callback)

    function buildQuery(params){
      var radius = params.radius ? radius : Configuration.defaultRadiusMeters
      var rectangle = GeospatialUtil().generateGeoRectangle(params.lat, params.long, radius)

      var q = ClearBlade.Query({collectionName:COLLECTION_NAME})
                .greaterThan( 'lat',rectangle.lat.min)
                .lessThan(    'lat',rectangle.lat.max)
                .greaterThan( 'long',rectangle.long.min)
                .lessThan(    'long', rectangle.long.max)

      if(params.tags){
        // loop thru tags
        // weird OR thang
      }
      if(params.collections){
        // loop thru tags
        // weird OR thang
      }

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
