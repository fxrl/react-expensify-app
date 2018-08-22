import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { getExpensesTotal } from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

const ExpensesSummary = (props) => {
    const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
    const total = getExpensesTotal(props.expenses);
    const formattedTotal = numeral(total / 100).format('$0,0.0000');
    return (
        <div>
            <h1> Viewing {props.expenses.length} {expenseWord} totalling {formattedTotal} </h1>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {expenses: selectExpenses(state.expenses, state.filters)};
};

export default connect(mapStateToProps)(ExpensesSummary);