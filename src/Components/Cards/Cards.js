import React from 'react';
import './Cards.css'
const Cards = props => {
    const {id,categoroy,img,name,stock,quantity,price,ratings,seller}=props.data
    return (
    <div className="col">
      <div className="card h-100">
       <img src={img}className="card-img-top"  alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">price : ${price}</p>
        </div>
        <div className="ps-3">
        <p>manufacturer : {seller}</p>
        <p>ratings : {ratings}</p>
        </div>
        <div className="mx-auto my-2">
        <button className="btn btn-info text-white">Add to cart</button>
        </div>
      </div>
    </div>
    )
};

export default Cards;