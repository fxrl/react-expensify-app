import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup removeExpense Action Object', () => {
    const action = removeExpense({ id: '123abc'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should setup editExpense Action Object', () => {
    const action = editExpense( '1234', { note: 'This is a test' });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1234',
        updates: {note: 'This is a test'}
    })
});

test('should setup add Expense action object with provided values', () => {
    const expenseData = {
        description: 'rent',
        amount: '2200',
        createdAt: '1000',
        note: 'this was last months rent'
    }
    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add Expense action object with default values', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0,
            id: expect.any(String)
        }
    })
});