import {getExpensesTotal, expenses} from '../../selectors/expenses-total';

test('should add up all expenses correctly', () => {
    const total = getExpensesTotal(expenses);
    expect(total).toBe(114195);
})

test('should return 0 if there are no expenses', () => {
    const testArray = [];
    const total = getExpensesTotal(testArray);
    expect(total).toBe(0);
})

test('should add up one expense', () => {
    const testArray = [    {
        id: '2',
        description: 'Rent',
        note: '',
        amount: 109500,
    }]
    const total = getExpensesTotal(testArray);
    expect(total).toBe(109500);
})