import React from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

const Detail = ({ match, location, searchData }) => {
  const { id } = queryString.parse(location.search);
  const selectedPoint = searchData[id];
  return (
    <div>
      <h2>{selectedPoint.name}</h2>

      <pre>{JSON.stringify(selectedPoint, null, 2)}</pre>
    </div>
  );
};

export default Detail;
