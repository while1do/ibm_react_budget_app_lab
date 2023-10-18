import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const setCurrency = (newCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });        
    }

    return <div className='alert alert-secondary d-flex budget'>
                <label for="currency_input">Currency: </label>
                <select id="currency_input" className="custom-select" id="inputGroupSelect01" value={currency} onChange={(event) => setCurrency(event.target.value)}>
                    <option value="$" name="dollar">$ Dollar</option>
                    <option value="£" name="pound">£ Pound</option>
                    <option value="€" name="euro">€ Euro</option>
                    <option value="₹" name="ruppee">₹ Ruppee</option>
                </select>
            </div>
}

export default Currency;