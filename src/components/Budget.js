import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        const maxBudget = 20000;
        const newBudget = event.target.value;

        if(newBudget > maxBudget) {
            alert("The budget cannot exceed the maximum of " + currency + maxBudget);
            //setBudget(budget);
            return;
        }

        if(newBudget < totalExpenses) {
            alert("The budget cannot be lower than the spending");
            //setBudget(budget);
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }

    return (
        <div className='alert alert-secondary d-flex budget'>
            <label for="budget_input" >Budget: {currency}</label>
            <input type="number" id="budget_input" step="10" value={budget} onChange={handleBudgetChange} />
        </div>
    );
};

export default Budget;