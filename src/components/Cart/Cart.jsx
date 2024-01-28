import React from 'react';
import './Cart.css';

const Cart = (props) => {
    //destructor
    const {cart} = props;
    //price
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;

    for(const product of cart){

        //first entry product 0 then try it
        // product.quantity = product.quantity || 1;
        //or
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const totalTax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + totalTax;

    return (
        <div className='cart '>

            <h4>Order Summery </h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice} </p>
            <p>Shipping: ${totalShipping}</p>
            <p>Tax: ${totalTax.toFixed(2)} </p>
            <h6>Grand Total: ${grandTotal.toFixed(2)} </h6>

        </div>
    );
};

export default Cart;