import React from 'react'
import '../../Styles/cards.css'
export default function Pictures({img}) {
  return (
    <div className='container'>
        <img className="picture" src={img} />
    </div>
  )
}
