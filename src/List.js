import React from "react";
import exampleData from "./exampleData";
import { Link } from "react-router-dom";
import queryString from "query-string";

const List = ({ match, location }) => {
  const query = queryString.parse(location.search);
  return (
    <div>
      <h2>List</h2>
      {Object.values(exampleData).map(mk => {
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
