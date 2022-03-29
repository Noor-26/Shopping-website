import React from 'react';
import { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';


const Shop = () => { 
    const [products, setProducts] = useState([])
    const [Carts, setCarts] = useState([])

    const showCarts = () => {
        
    }
    useEffect(() => {
      
        fetch('Products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
        
    }, [products])
    return (
        <div>
            <div className="display-items w-100">
        <div className="show-products">
      <h1 className="my-3 text-center ">Product</h1>
      <div className="row row-cols-1 row-cols-md-3 product mx-auto g-4 container">
      {
               products.map(product=> <Cards data={product}></Cards>) 
           }
      </div>
        </div>
    <div>
      <h4 className="my-3">Other summury</h4>
    </div>
      </div>
        </div>
    );
};

export default Shop;