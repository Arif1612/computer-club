import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let name;

    for (const person of cart) {
        total = total + person.creditComplete;
        name = person.name;
    }

    return (
        <div>
            <h1>Add Person</h1>
            <h2>Total Add: {props.cart.length}</h2>
            <h2>Total Credit: {total}</h2>
            <h2>Recently Added: {name}</h2>


        </div>
    );
};

export default Cart;