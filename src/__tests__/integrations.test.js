import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import { MemoryRouter } from 'react-router-dom';
import Root from '../root';
import App from '../components/app';
import CommentList from '../components/comment-list';
import CommentBox from '../components/comment-box';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Comment 1'}, {name: 'Comment 2'}]
    });
})

afterEach(() => {
    moxios.uninstall();
})

it('can fetch a list of comments and display them if user is logged in', (done) => {
    const initialState = {
        auth: true
    };
    const wrapped = mount(
        <Root initialState={initialState}>
            <MemoryRouter initialEntries={['/post']}>
                <App />
                <CommentList/>
            </MemoryRouter>
        </Root>
    );
    expect(wrapped.find('.comment').length).toEqual(0);
    wrapped.find('.fetch-comments').simulate('click');
    
    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('.comment').length).toEqual(2);
        done();
        wrapped.unmount();
    })
})
