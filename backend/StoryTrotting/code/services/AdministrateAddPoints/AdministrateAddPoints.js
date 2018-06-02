function AdministrateAddPoints(req, resp) {
  var row = {
		    "address": "204 W Ben White Blvd, Austin, TX 78704",
		    "collection": "[U.S. Civil War]",
		    "description": "The fort extended from South First Street to Congress.'",
		    "id": "fort-magruder",
		    "images": "",
		    "lat": 30.224214,
		    "location_name": "Austin, TX",
		    "long": -97.764295,
		    "name": "There used to be a confederate Civil War fort here.",
		    "owner": "douglessismore@gmail.com",
		    "sources": "https://www.statesman.com/lifestyles/finding-civil-war-fort-magruder/s1rcnJDCHxviswFULXGrwL/",
		    "tags": "[General History]",
		    "timestamp": "1863-01-01T00:00:00Z",
		    "timestamp_end": "1863-12-31T00:00:00Z",
			"timestamp_created": new Date()
		}
    ClearBlade.init({request:req})
    ClearBlade.Collection({collectionName:"poi"}).create(row,function(err, data){
      if(err){
        resp.error("Failed: " + JSON.stringify(data))
      }
      resp.success("Successfully created")
    })
}
