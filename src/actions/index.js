import commentList from '../components/comment-list';
import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from './types';

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export function fetchComments() {
    const response = axios.get('http://jsonplaceholder.typicode.com/comments');

    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}

export function changeAuth(isLogedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLogedIn
    }
}
