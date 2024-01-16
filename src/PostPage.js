import React from 'react'
import { useParams ,Link,useNavigate} from 'react-router-dom'
import DataContext from './context/DataContext';
import { useContext } from 'react';
import api from  './api/posts'
const PostPage = () => {
  const {posts,setPosts}=useContext(DataContext);
  const {id}=useParams();
  const post=posts.find((post)=>((post.id).toString() === id));
  const navigate=useNavigate()


//handle Delete
const handleDelete=async (id)=>{  
  try {
    const newPosts= posts.filter((post)=>((post.id)  !== id))
    setPosts(newPosts);
    navigate("/");
    await api.delete(`/posts/${id}`);

    
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


}  

  return (




    <main className="PostPage">
<article className='post'>
{post && <> <h2 >{post.title}</h2>
            <p className='postDate'> {post.datetime } </p>
            <p className='postBody'> {post.body}</p>
            <button onClick={()=>(navigate(`/edit/${id}`))} className='editButton'>edit Post</button>
            <button onClick={()=>(handleDelete(post.id))}>Delete Post</button>
         
          </>
}
{!post && <article className='post'><h2 >Sorry this Page is not found !!!!!</h2>
           
           <Link to={'/'}> <p className='postBody'>Go Home mabe there is some posts</p></Link>
            </article>}
</article>
</main>
  )
}

export default PostPage