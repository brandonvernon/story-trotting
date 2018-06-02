import React from "react";
import exampleData from "./exampleData";
import { Link } from "react-router-dom";
import queryString from "query-string";

const Detail = ({ match, location }) => {
  const { id } = queryString.parse(location.search);
  const selectedPoint = exampleData[id];
  return (
    <div>
      <h2>{selectedPoint.name}</h2>

      <pre>{JSON.stringify(selectedPoint, null, 2)}</pre>
    </div>
  );
};

export default Detail;
