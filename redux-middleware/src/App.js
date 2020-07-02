import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from './modules/counter';
import * as postActions from './modules/post'

class App extends Component {
    componentDidMount() {
        // 컴포넌트가 처음 마운트 될 때 현재 number를 postId로 사용하여 포스트 내용 불러옴
        const { number, PostActions } = this.props;
        // PostActions.getPost(number)
        this.getPost(number)
    }

    componentWillReceiveProps(nextProps) {
        const { PostActions } = this.props

        // 현재 number와 새로 받을 number가 다를 경우 요청 시도
        if (this.props.number !== nextProps.number) {
            // PostActions.getPost(nextProps.number)
            this.getPost(nextProps.number)
        }
    }


    // 요청 완료 후 할 작업이 있거나 / 에러가 발행했을 때 작업을 해야될때
    getPost = async (postId) => {
        const { PostActions } = this.props
        try {
            await PostActions.getPost(postId)
            console.log('요청이 완료 된 다음에 실행');
        } catch (e) {
            console.log('에러 발생');
        }
    }

    render() {
        const { CounterActions, number, post, error, loading } = this.props;

        return (
            <div>
                <p>{number}</p>
                <button onClick={CounterActions.increment}>+</button>
                <button onClick={CounterActions.decrement}>-</button>
                {loading && <h2>로딩중...</h2>}
                {error ?
                    <h1>에러발생!</h1>
                    :
                    (
                        <div>
                            <h1>{post.title}</h1>
                            <p>{post.title}</p>
                        </div>
                    )}
            </div>
        );
    }
}

export default connect(
    (state) => ({
        number: state.counter,
        post: state.post.data,
        loading: state.post.pending,
        error: state.post.error
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch),
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(App);