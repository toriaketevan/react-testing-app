import { SAVE_COMMENT } from '../types';
import { saveComment } from '../index';

describe('Save comment', () => {
    it('has a correct type', () => {
        const action = saveComment();
        expect(action.type).toEqual(SAVE_COMMENT);
    })

    it('has a correct payload', () => {
        const action = saveComment('new comment');
        expect(action.payload).toEqual('new comment');
    })
})