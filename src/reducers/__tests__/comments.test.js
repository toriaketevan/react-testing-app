import { SAVE_COMMENT } from '../../actions/types';
import commentsReducer from '../comments';

it('handles action with type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'new comment'
    }

    const state = commentsReducer([], action);
    expect(state).toEqual(['new comment']);
})

it('handles action with unknown type', () => {
    const state = commentsReducer([], {});
    expect(state).toEqual([]);
})
