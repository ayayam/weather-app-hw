import React, { useRef } from 'react';


function InputField({ cityName, handleCityNameChange }) {

    return (
        <>
            <label htmlFor='cityName'>City: </label>
            <input 
                id='cityName' 
                name='cityName'
                type='text'
                onChange={handleCityNameChange}
            />
        </>
    );
}

export default InputField;