import React, { useContext } from 'react';
import { MdAddCircle, MdDelete, MdRemoveCircle } from 'react-icons/md';

import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'DECREASE_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><MdAddCircle style={{color:'green'}} onClick={event=> increaseAllocation(props.name)} /></td>
        <td><MdRemoveCircle style={{color:'red'}} onClick={event=> decreaseAllocation(props.name)} /></td>
        <td><MdDelete onClick={handleDeleteExpense} /></td>
        </tr>
    );
};
export default ExpenseItem;
