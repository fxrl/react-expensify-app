import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const newState = expensesReducer(undefined, {type: '@@INIT'});
  expect(newState).toEqual([]);   
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 2
    }
    const newState = expensesReducer(expenses, action);
    expect(newState).toEqual([expenses[0],expenses[2]]);
})

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 4
    }
    const newState = expensesReducer(expenses, action);
    expect(newState).toEqual(expenses);
})

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: { 
            id: 0,
            description: 'test', 
            note : '', 
            amount: 2000, 
            createdAt: 0, 
        }
    }

   const newState = expensesReducer(expenses, action);
    expect(newState).toEqual([...expenses, action.expense])
});


test('should edit an expense', () => {
    const description = 'bum';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description
        }
    };

    const newState = expensesReducer(expenses, action);
    expect(newState[1].description).toBe('bum');
})

test('should not edit an expense if id not found', () =>{
    const description = 'rum';
    const action = {
        type: 'EDIT_EXPENSE',
        id: 45,
        updates: {
            description
        }
    }
    const newState = expensesReducer(expenses, action);
    expect(newState).toEqual(expenses);
})