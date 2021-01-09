import React from 'react';
import { shallow, mount } from 'enzyme';
import Root from '../../root';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from '../app';
import CommentList from '../comment-list';
import CommentBox from '../comment-box';

let wrapped;

beforeEach(() => {
    wrapped = mount(<Root><BrowserRouter><App /></BrowserRouter></Root>);
});

afterEach(() => {
    wrapped.unmount();
})

it('shows page header', () => {
    expect(wrapped.find('.header').length).toEqual(1);
})

it('shows comment List for "/" route', () => {
    wrapped = mount(<Root><MemoryRouter initialEntries={['/']}><App /></MemoryRouter></Root>);
    expect(wrapped.find(CommentList).length).toEqual(1);
});

it('shows comment List for "/post" route if user is not logged in', () => {
    const initialState = {
        auth: false
    };
    wrapped = mount(<Root initialState={initialState}><MemoryRouter initialEntries={['/post']}><App /></MemoryRouter></Root>);
    expect(wrapped.find(CommentList).length).toEqual(1);
})

it('shows comment box for "/post" route if user is logged in', () => {
    const initialState = {
        auth: true
    };
    wrapped = mount(<Root initialState={initialState}><MemoryRouter initialEntries={['/post']}><App /></MemoryRouter></Root>);
    expect(wrapped.find(CommentBox).length).toEqual(1);
})