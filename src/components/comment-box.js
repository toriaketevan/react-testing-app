import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import requireAuth from './require-auth';

class CommentBox extends React.Component {
    state = { comment: '' };

    handleChange = event => {
        this.setState({ comment: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <h4>Add a comment</h4>
                        <textarea value={this.state.comment} onChange={this.handleChange} />
                        <div>
                            <button type="submit">
                                Submit comment
                            </button>
                        </div>
                    </form>
                </div>
                <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch comments</button>
            </div>
        );
    }
}

export default connect(null, actions)(requireAuth(CommentBox));
