import React from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

const List = ({ match, location, searchData }) => {
  const query = queryString.parse(location.search);
  return (
    <div>
      <h2>List</h2>
      {Object.values(searchData).map(mk => {
        return (
          <div key={mk.id}>
            <Link
              to={`/home?${queryString.stringify({
                ...query,
                id: mk.id,
                lat: mk.lat,
                lng: mk.lng
              })}`}
            >
              {mk.name}
            </Link>
          </div>
        );
      })}
      <h2>Collections</h2>
      <div>
        <Link
          to={`/home?${queryString.stringify({
            collections: ["Willie Nelson", "Movies"]
          })}`}
        >
          Movies
        </Link>
      </div>
    </div>
  );
};

export default List;
