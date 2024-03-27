import React, {useContext}  from 'react'
import {DataContext} from '../../../GlobalState'
import ProductCard from '../../utils/productCard/ProductCard'
import { Link } from 'react-router-dom';


function Products() {
    const state = useContext(DataContext)
    const [products] = state.products
    

    return (
       
        <>
         <Link to={"/create"}>Feedback form</Link><br></br>
            <h2 className="app_title">
                 C4FITNESS - "i" is the only difference between FIT and FAT
            </h2>
        <div className="products_page">
             
            {
                 products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))
            }
            
        </div>
        </>
    )

}
export default Products