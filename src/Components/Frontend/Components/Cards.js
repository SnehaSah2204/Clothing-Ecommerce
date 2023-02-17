import React,{useState} from 'react'
import Card from './Card';
import siteItems from '../../Backend/ClothesData'
import Carousel from './Carousel';
import "../../Styles/cards.css";
import Pictures from './Pictures';
import { AiOutlineArrowRight } from "react-icons/ai";



export default function Cards({addToCart}) {
    const img2="https://images.unsplash.com/photo-1567093593555-efe57034aa27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
    return (
        <div  >
            <Carousel />
            <div className='container cardContainer'>
            <h1 className='trendingHeading'>Our Latest Trends <AiOutlineArrowRight/></h1>
            {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> */}
            
            <div className='row container'>
                {
                    siteItems.map((item) => {
                        return (
                            <Card item={item} key={item.id} addToCart={addToCart} />
                        )
                    })
                }

            </div>
            </div>
            <Pictures img={img2}/>
        </div>

    )
}
