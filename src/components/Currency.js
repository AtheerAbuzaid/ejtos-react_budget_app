
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../../src/App.css';

const Currency = () => {
    const {dispatch} = useContext(AppContext);

    const handleChangeCurrency = (newCurrency) => {
        dispatch({
            type: "CHG_CURRENCY",
            payload: newCurrency
        });
    };

    return(
        <div className='alert'>
            <select id="currencySelect" onChange={(event) => {handleChangeCurrency(event.target.value)}}>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pound" selected>£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="rupee">₹ Rupee</option>
            </select>
        </div>
    );
};

export default Currency;