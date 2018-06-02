// TODO Account for curvature
const METERS_PER_DEGREE = 111000
function GeospatialUtil(){

    function generateGeoRectangle(lat, long, radiusMeters){
        log({lat, long, radiusMeters})
        var rangeFromCenter = radiusMeters / METERS_PER_DEGREE / 2
        log({rangeFromCenter})
        return {
            lat:{
                min:lat - rangeFromCenter,
                max: lat + rangeFromCenter
            },
            long:{
                min: long - rangeFromCenter,
                max: long + rangeFromCenter
            }
        }
    }
    return {
        generateGeoRectangle
    }
}

