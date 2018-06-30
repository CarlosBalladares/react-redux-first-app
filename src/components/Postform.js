
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {createPost} from '../actions/postAction' // The action



class PostForm extends Component{

  constructor(props){
    super(props);
    this.state={
      title: '',
      body: ''
    };
    // lookup binding
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value}
    );
  }

  onSubmit(e){
    e.preventDefault();

    const post ={
      title: this.state.title,
      body: this.state.body
    }

    // fetch(URL, {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(post)
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))

    this.props.createPost(post);
  }

  render(){
    return(
      <div>
        <h1>Add post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label> Title </label><br/>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label> Body </label><br/>
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.onChange}

            />
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes={
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
