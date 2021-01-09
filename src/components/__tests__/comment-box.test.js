import React from 'react';
import { mount } from 'enzyme'
import CommentBox from '../comment-box';
import { BrowserRouter, withRouter } from 'react-router-dom';
import Root from '../../root';

let wrapped;
const historyMock = { push: jest.fn() };

beforeEach(() => {
    wrapped = mount(<Root><CommentBox history={historyMock} /></Root>);
})

afterEach(() => {
    wrapped.unmount();
})

it('shows textarea and two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
})

describe('textarea', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'test comment' }
        });
        wrapped.update();
    })

    it('has a text are that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('test comment');
    })
    
    it('has a empty textarea after submitting the form', ()=> {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    })
})
