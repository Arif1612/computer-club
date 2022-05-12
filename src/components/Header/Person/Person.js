import React from 'react';
import './Person.css'

const Person = (props) => {
    // aikhane person ta asole ami jokhon map korse totkhon tar vitore j name dia pathaise oi name tai dite hobe nahole pabe nhh
    // console.log(props);
    const { name, age, country, creditComplete, department, img, position } = props.person;
    return (
        <div className='person'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='details'>
                <h2>Name: {name}</h2>
                <h2>Age: {age}</h2>
                <h2>Department: {department}</h2>
                <h2>Credit Complete: {creditComplete}</h2>
                <h2>Positon: {position}</h2>
                <h2>Country{country}</h2>
                <button
                    onClick={() => props.handleAddToCart(props.person)}
                    className='add-button'>Add Members</button>
            </div>

        </div>
    );
};

export default Person;