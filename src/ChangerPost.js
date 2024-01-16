import React, { useContext, useEffect ,useState,} from 'react';
import { useParams,Link,useNavigate } from 'react-router-dom';
import DataContext from './context/DataContext';
import api from './api/posts'
import { format } from "date-fns";
const ChangerPost = () => {


  const {posts,setPosts}=useContext(DataContext)
  const navigate=useNavigate();
  const [ediTitle,setEditTitle]=useState('');
  const [editBody,setEditBody]=useState('');
  const { id } = useParams();
  const post = posts.find(post => post.id.toString() === id);

    //handle edit
    const handleEdit =async (id)=>{
      const date=format(new Date(),'MMMM dd,yyyy pp');
      const editPost={
        id:id,
        title:ediTitle,
        datetime:date,
        body:editBody
      }
      const newPosts=posts.map((post)=>(
        post.id===id? editPost : post))
  try {
    await api.put(`/posts/${id}`,editPost);
    setPosts(newPosts);
    
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
  setEditTitle("");
  setEditBody("");
  navigate('/');
  
  
    }
  
  
  
  
  
  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditBody, setEditTitle]);

  return (
    <main className='NewPost'>
           {post &&
        <>
    
      <h2>Edit Post</h2>
      <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='title'>Title:</label>
        <input
          required
          value={ediTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          id='title'
          type='text'
        />
        <label htmlFor='body'>Post:</label>
        <textarea
          required
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
          id='body'
        ></textarea>
        <button type='submit' onClick={() => handleEdit(post.id)}>
          Update
        </button>
      </form>
     
      </>
       }
    {!post &&
    <>
       <h2>Page Not Found</h2>
       <p>next Time mabe .....</p>
       <p>
           <Link to='/'>Visit Our Homepage</Link>
       </p>

       </>


    }
    </main>

  );
};

export default ChangerPost;
