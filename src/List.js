import React from "react";
import exampleData from "./exampleData";
import { Link } from "react-router-dom";
import queryString from "query-string";

const List = ({ match }) => (
  <div>
    <h2>List</h2>
    {Object.values(exampleData).map(mk => {
      return (
        <div key={mk.id}>
          <Link to={`/home?${queryString.stringify({ id: mk.id })}`}>
            {mk.name}
          </Link>
        </div>
      );
    })}
    collections
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

export default List;
