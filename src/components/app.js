import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CommentBox from './comment-box';
import CommentList from './comment-list';

class App extends React.Component {
    renderButton() {
        if(this.props.auth) {
            return (
                <button onClick={() => this.props.changeAuth(false)}>Sign out</button>
            );
        } else {
            return (
                <button onClick={() => this.props.changeAuth(true)}>Sign in</button>
            );
        }
    }
    renderHeader() {
        return (
            <div className="header">
                <ul>
                    <li>
                        <Link id="home" to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/post">Post a comment</Link>
                    </li>
                    <li>
                        {this.renderButton()}
                    </li>
                </ul>
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommentBox}/>
                <Route path="/" exact component={CommentList}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth }
}

export default connect(mapStateToProps, actions)(App);
