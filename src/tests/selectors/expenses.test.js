import getVisibleExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
    }
    const result = getVisibleExpenses(expenses, filters)

    expect(result).toEqual([
        expenses[2],
        expenses[1]
    ])
})

test(`should filter by start date`, () => {
    const filters = {
        text: '',
        startDate: moment(0),
        endDate: undefined,
    };

    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[2]]);
})

test('should filter by end date', () => {
    const filters = {
        text: '',
        endDate: moment(0).add(2, 'days'),
        startDate: undefined
    } 
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[0],expenses[1]]);
})

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        endDate: undefined,
        startDate: undefined
    };

    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
})

test('should sort by amount', () => {
     const filters = {
         text: '',
         sortBy: 'amount',
         endDate: undefined,
         startDate: undefined
     };

     const result = getVisibleExpenses(expenses, filters);
     expect(result).toEqual([expenses[1],expenses[2],expenses[0]]);
})
