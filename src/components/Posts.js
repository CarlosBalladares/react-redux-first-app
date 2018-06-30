import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // connects component to redux store
import {fetchPosts} from '../actions/postAction' // The action


class Posts extends Component{

  // constructor(props){
  //   super(props);
  //   this.state ={
  //     posts:[]
  //   }
  // }

  componentWillMount(){
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps){
    ///console.log('hi')
    if(nextProps.newPost){
      //alert(nextProps.newPost);
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render(){

    const postItems = this.props.posts.map((post)=>(
      <li key={post.id}>
        <h3> {post.title} </h3>
        <p>{post.body}</p>
      </li>)
    );

    return(
      <div>
        <h3>Posts</h3>
        <ul>{postItems}</ul>
      </div>
      );
  }
}

Posts.propTypes={
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

function mapStateToProps(state){
  return (
    {
      posts: state.posts.items,
      newPost: state.posts.item
    }
  );
}


export default connect(mapStateToProps, {fetchPosts})(Posts);
