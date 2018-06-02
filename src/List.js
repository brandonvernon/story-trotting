import React from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import "./List.css";

const List = ({ match, location, searchData }) => {
  const query = queryString.parse(location.search);
  return (
    <div className="wrapper">
      <div className="container">
        <h2>List</h2>
        {Object.values(searchData).map(mk => {
          return (
            <div className="list-link" key={mk.id}>
              <Link
                to={`/home?${queryString.stringify({
                  ...query,
                  id: mk.id,
                  lat: mk.lat,
                  lng: mk.long
                })}`}
              >
                {mk.name}
              </Link>
            </div>
          );
        })}
        <h2>Collections</h2>
        <div className="list-link">
          <Link
            to={`/home?${queryString.stringify({
              collections: ["Willie Nelson", "Movies"]
            })}`}
          >
            Movies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default List;
