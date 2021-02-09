import jsonplaceholder  from '../api/jsonPlaceHolder';

export const fetchPosts= async ()=>{

const res=await jsonplaceholder.get('/posts');

    return {
        type:'FETCH_POSTS',
        payload:res
    };
};