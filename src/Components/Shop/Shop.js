import React from 'react';
import { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Cart from '../Carts/Cart';
import './Shop.css'


const Shop = () => { 
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([])

    const showCarts = cart => {
        const newCart = [...carts,cart]
        setCarts(newCart);
        console.log(carts)
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
               products.map(product=> <Cards data={product} showCart ={showCarts}></Cards>) 
           }
      </div>
        </div>
    <div className="Carts ps-3">
      <h4 className="my-3 text-center">Other summury</h4>
      <Cart carts={carts}></Cart>
    </div>
      </div>
        </div>
    );
};

export default Shop;