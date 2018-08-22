import { shallow } from 'enzyme';
import React from 'react';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses'

test('should render expenses summary correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should render one expense on expense summary correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[1]]}/>);
    expect(wrapper).toMatchSnapshot();
})