import React, { Component } from 'react';
import { mount } from 'enzyme';
import requireAuth from '../require-auth';
import Root from '../../root';

const historyMock = { push: jest.fn() };
const TestComponent = () => {
    return <div>Test component</div>
}

it('should not render the component if the user is logged out', () => {
    const initialState = {
        auth: false
    };
    const ConditionalComponent = requireAuth(TestComponent);
    
    const wrapped = mount(
        <Root initialState={initialState}><ConditionalComponent history={historyMock} /></Root>
    );

    expect(wrapped.find(ConditionalComponent).prop('history').push).toHaveBeenCalled();
});

it(
    'should render the component if the user is logged in'
    , () => {
    const initialState = {
        auth: true
    };
    const ConditionalComponent = requireAuth(TestComponent);

    const wrapped = mount(
        <Root initialState={initialState}><ConditionalComponent history={historyMock} /></Root>
    );

    expect(wrapped.find(ConditionalComponent).prop('history').push).not.toHaveBeenCalled();
});