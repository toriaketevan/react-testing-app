import React from 'react';
import { mount } from 'enzyme';
import Root from '../../root';
import CommentList from '../comment-list';

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['comment 1', 'comment 2']
    };
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList/>
        </Root>
    )
})

it('shows one LI for each comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
})

it('shows the text for each comment', () => {
    expect(wrapped.render().text()).toContain('comment 1');
    expect(wrapped.render().text()).toContain('comment 2');
})