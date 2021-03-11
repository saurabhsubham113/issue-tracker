import React from 'react';
import { shallow } from 'enzyme';
import AddIssue from './AddIssue'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import issueReducer from '../../../reducer/issueReducer'

const store = createStore(issueReducer)

const ReduxProvider = ({ children, reduxStore }) => (
    <Provider store={reduxStore}>{children}</Provider>
)
describe('Add Issue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Provider store={store}><AddIssue /></Provider>);

    });

    test('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

});