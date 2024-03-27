import React from 'react'
import './DetailProductCard.css'
import Rating from '../rating/Rating'

function DetailProductCard({product}) {
    return (
        <div className="detail_product_card">
           <img src={product.images.url} alt=""/>

            <div className="detail_product_card_content">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
               <button>Contact</button>

           <div> 
               <h3 style={{margin: '10px 0'}}>Rating: {product.numReviews} reviews</h3>
               <Rating props={product} /> 
            </div>   
     </div>
  </div> 
    )
}     

export default DetailProductCard        