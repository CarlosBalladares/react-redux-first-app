import {FETCH_POSTS, NEW_POST} from './types';
const URL ='https://jsonplaceholder.typicode.com/posts';

export function fetchPosts(){
    return function(dispatch){
      fetch(URL)
        .then(res => res.json())
        .then(data => dispatch({
          type: FETCH_POSTS,
          payload: data
        }));
    }
}


export function createPost(post){
  console.log('createpost action');
    return function(dispatch){
      fetch(URL, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(post)
      })
      .then(res => res.json())
      .then(post => dispatch({
          type: NEW_POST,
          payload: post
      }))
    }
}
