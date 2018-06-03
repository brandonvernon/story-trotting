import React from "react";
import queryString from "query-string";
import { Link } from "react-router-dom";
import { distanceInWordsToNow, format } from "date-fns";

const Detail = ({ match, location, searchData, searchLocalPoints }) => {
  const { id, lat, long } = queryString.parse(location.search);
  const selectedPoint = searchData[id];
  if (!selectedPoint) return <div>Loading</div>;
  return (
    <div>
      <h2>{selectedPoint.name}</h2>
      <h4>{selectedPoint.description}</h4>

      {JSON.parse(selectedPoint.collection).map(coll => (
        <Link
          to={`/?${queryString.stringify({ collection: coll })}`}
          onClick={() =>
            searchLocalPoints({
              lat: Number(lat),
              long: Number(long),
              collection: [coll]
            })
          }
        >
          {coll}
        </Link>
      ))}
      <div>
        Location Name: <b>{selectedPoint.location_name}</b>
      </div>
      <div>
        address: <b>{selectedPoint.address}</b>
      </div>
      <div>
        owner: <b>{selectedPoint.owner}</b>
      </div>
      <div>
        tags: <b>{selectedPoint.tags}</b>
      </div>
      <div>
        timestamp: <b>{format(selectedPoint.timestamp, "MMM DD YYYY")}</b>
      </div>
      <div>
        timestamp_created:{" "}
        <b>{format(selectedPoint.timestamp_created, "MMM DD YYYY")}</b>
      </div>
      <div>
        timestamp_end:{" "}
        <b>{distanceInWordsToNow(selectedPoint.timestamp_end)}</b>
      </div>

      <div>
        sources:{" "}
        <a target="blank" href={selectedPoint.sources}>
          {selectedPoint.sources}
        </a>
      </div>
    </div>
  );
};

export default Detail;
