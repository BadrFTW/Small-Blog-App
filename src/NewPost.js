import React from 'react'
import { useState,useContext } from 'react';
import api from  './api/posts'
import DataContext from './context/DataContext';
import { format } from "date-fns";
import { useNavigate } from 'react-router-dom';
const NewPost = () => {

  
  const navigate=useNavigate();
  const {posts,setPosts}=useContext(DataContext);
  const [Title,setTitle]=useState('');
  const [body,setBody]=useState('');

    //handle submit
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const idd=posts.length ? posts[posts.length-1].id+1:0;
    const date=format(new Date(),'MMMM dd,yyyy pp')
  const newPost={
  id:idd,
  title:Title,
  datetime:date,
  body:body
  }
    try { 
    const newPosts=[...posts,newPost]
    setPosts(newPosts)
    await api.post('/posts',newPost)
    } catch (err) { 
      if (err.response) {
      // Not in the 200 response range 
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else {
      console.log(`Error: ${err.message}`);
    }
      
    }
  setBody("")
  setTitle("")
  navigate('/')
  }







  return (
    
    <main className='NewPost'>
      <h2>NewPost</h2>
    
    <form className='newPostForm' onSubmit={(e)=>(handleSubmit(e))}> 
  < label htmlFor='title'>Title:</label>
    <input required value={Title} onChange={(e)=>(setTitle(e.target.value))} id='title' type='texte' ></input>
    < label htmlFor='body'>post:</label>
    <textarea required value={body} onChange={(e)=>(setBody(e.target.value))} id='body'> </textarea>
<button type='submit'>Create</button>
    </form>
    
    </main>
  )
}

export default NewPost