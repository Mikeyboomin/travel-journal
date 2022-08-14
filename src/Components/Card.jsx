import React from 'react'


const Card = (props) => {
  return (
    <div className='inline'>
      <div className="img-part">
      <img className="card1" src={props.imageUrl} />
      </div>
      <div className="txt-part">
      <p className="country"><i className="fa-solid fa-location-dot"></i>{props.location}</p>
      <a className='goog-map' href={props.googleMapsUrl}>View on Google Maps</a>
      <h1>{props.title}</h1>
      <p className="start-date">{props.startDate}</p>
      <p className="to"> - </p>
      <p className="end-date">{props.endDate}</p>
      <p className="desc">{props.description}</p>
      </div>
      
    </div>
  )
}

export default Card