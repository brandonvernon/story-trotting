import React from 'react'
import queryString from 'query-string'
import {Link} from 'react-router-dom'
import {distanceInWordsToNow, format} from 'date-fns'
import './Detail.css'

const Detail = ({ match, location, searchData, searchLocalPoints }) => {
  const { id, lat, long } = queryString.parse(location.search);
  const selectedPoint = searchData[id];
  if (!selectedPoint) return <div>Loading</div>;
  return (
    <div className="Detail">
      <h2>{selectedPoint.name}</h2>
      <h4>{selectedPoint.description}</h4>

<<<<<<< HEAD
      <div className="stats">
        <div>
        <b>Collection: </b>
        {JSON.parse(selectedPoint.collection).map(coll => (
          <Link to={`/?${queryString.stringify({collection: coll})}`}>
            {coll}
          </Link>
        ))}
        </div>
        <div>
          <b>Location Name: </b> {selectedPoint.location_name}
        </div>
        <div>
          <b>Address: </b>
          {selectedPoint.address}
        </div>
        <div>
          <b>Date: </b>{format(selectedPoint.timestamp, 'MMM DD YYYY')}
        </div>
        <div className="citation">
          <b>Source: </b>{' '}
          <a target="blank" href={selectedPoint.sources}>
            {selectedPoint.sources}
          </a>
        </div>
        {/*    <div>
          <b>Owner: </b>{selectedPoint.owner}
        </div>
        <div>
          tags: <b>{selectedPoint.tags}</b>
        </div>*/}
        {/*<div>
        timestamp_created:{" "}
        <b>{format(selectedPoint.timestamp_created, "MMM DD YYYY")}</b>
      </div>
      <div>
        timestamp_end:{" "}
        <b>{distanceInWordsToNow(selectedPoint.timestamp_end)}</b>
      </div>*/}
      </div>
    </div>
  )
}

export default Detail
