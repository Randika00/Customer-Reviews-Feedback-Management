import React from 'react'
import {Link} from 'react-router-dom'
import './ProductCard.css'

function ProductCard({product}) {
    return (
        <div className="product_card">
            <img src={product.images.url} alt=""/>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className="product_card_row">
                <Link to={`/product/${product._id}`}>View</Link>
                <button>Read More</button>
            </div>    

        </div>
    )
}
export default ProductCard 