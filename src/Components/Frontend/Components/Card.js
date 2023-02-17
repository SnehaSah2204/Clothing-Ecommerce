import React from 'react'
import '../../Styles/cards.css'
import { BsCart4 } from "react-icons/bs";


export default function Card({item,addToCart}) {


    const {id,name,price,image}=item;

    return (
            <div key={id} className='col-md-3 col-sm-6  col-xs-6 singleCard zoom'>
                <div className="card actualCard" >
                    <img src={image} className="card-img-top cardImg " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{price}</p>
                        <button onClick={()=>{addToCart(item)}} className="btn btn-dark mybtn">Add to cart &nbsp;&nbsp;<BsCart4 /></button>
                    </div>
                </div>
            </div>
    )
}
