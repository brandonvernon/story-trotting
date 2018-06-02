import React from "react";
import exampleData from "./exampleData";
import { Link } from "react-router-dom";

const List = ({ match }) => (
  <div>
    <h2>List</h2>
    {Object.values(exampleData).map(mk => {
      return (
        <div key={mk.id}>
          <Link to={`/home?id=${mk.id}`}>{mk.name}</Link>
        </div>
      );
    })}
  </div>
);

export default List;
