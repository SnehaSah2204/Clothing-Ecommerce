import React from 'react'
import '../../Styles/carousel.css'
import img1 from '../../images/carousel1.png'
import img2 from '../../images/carousel2.PNG'
import img3 from '../../images/carousel3.PNG'
import img4 from '../../images/carousel4.PNG'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100 carouselImage" alt="..."  />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100 carouselImage" alt="..."  />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100 carouselImage" alt="..."  />
                    </div>
                    <div className="carousel-item">
                        <img src={img4} className="d-block w-100 carouselImage" alt="..."  />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
