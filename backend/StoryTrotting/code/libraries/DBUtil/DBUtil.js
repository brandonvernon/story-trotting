/**
 * DBUtil
 */
DBUtil = {
    serialize: function(raw){
        var output = raw
            for(i in Configuration.keysToStringify){
                var key = Configuration.keysToStringify[i]
                output[key] = JSON.stringify(raw[key])
            }
        return output
    },
    deserialize: function(serialized){
        for(i in Configuration.keysToStringify){
            var key = Configuration.keysToStringify[i]
            try{
                output[key] = JSON.parse(raw[key])
            }
            catch(e){
                var msg = "Unable to parse " + key + " from DB entry: " + JSON.stringify(serialized)
                //rethrow
                log(msg); throw new Error("msg")
            }
        }
    }
}

