import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Person from '../Person/Person';
import './Member.css'

const Member = () => {
    // use state dia daa dekhaite hoy
    const [persons, setPersons] = useState([]);
    const [cart, setCart] = useState([]);

    // data load korse
    useEffect(() => {
        fetch('./info.JSON')
            .then(res => res.json())
            .then(data => setPersons(data));
    }, [])

    // event handelar add

    const handleAddToCart = (person) => {
        const newCart = [...cart, person];
        setCart(newCart);
    }



    return (
        // full member container nise aitar vitore 2 ta div ase ro 
        <div className='member-container'>
            {/* person details gula akdike thakebe */}
            <div className='member-details'>

                {
                    persons.map(person =>
                        // aikhane kintu amra r akta component person k call korse j sobgula member ar details show korbe 

                        <Person
                            person={person}
                            handleAddToCart={handleAddToCart}
                        >

                        </Person>
                    )
                }
            </div>

            {/* cart ar div r akdike thakbe */}
            <div className='member-cart'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Member;