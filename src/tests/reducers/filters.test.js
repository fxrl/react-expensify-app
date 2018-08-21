import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
})

test('should set sortBy to amount', () => {
    const newState = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(newState.sortBy).toBe('amount');
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
    };

    const newState = filtersReducer(currentState, {type: 'SORT_BY_DATE'});
    expect(newState.sortBy).toBe('date');
})

test('should set text filter', () => {
    const newState = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'this is a test'})
    expect(newState.text).toBe('this is a test')
})

test('should set startDate filter', () => {
    const date = moment();
    const newState = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: date});
    expect(newState.startDate).toEqual(date);
});

test('should set endDate filter', () => {
    const date = moment();
    const newState = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: date});
    expect(newState.endDate).toEqual(date);
})