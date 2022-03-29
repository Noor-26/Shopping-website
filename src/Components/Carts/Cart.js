import React from 'react';

const Cart = ({carts}) => {
    // const {id} = cart
    let total = 0;
    let shipping = 0
    for (const cart of carts) {
        total +=cart.price
        shipping += cart.shipping
    }
    const tax = (total* 10 ) / 100
    return (
        <div>
            <p>selected items : {carts.length}</p>
            <p>Total price : ${total}</p>
            <p>Shipping : ${shipping}</p>
            <p>tax : ${tax}</p>
        </div>
    );
};

export default Cart;