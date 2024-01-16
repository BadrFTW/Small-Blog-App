import { createContext,useState,useEffect } from "react";
import useFetch from "../hooks/useFetch";
const DataContext=createContext({});

export const DataProvider =({children})=>

{
const [posts,setPosts]=useState([])
const {isLoading,data,error}=useFetch('http://localhost:3500/posts');
const [search,setSearch]=useState('');
const [searchResult,setSearchResult]=useState('')

//Posts
useEffect(()=>{
    setPosts(data);
},[data]) 

//useEffect for search
useEffect(()=>{
    const searchResults=posts.filter((post)=>((post.body).toLocaleLowerCase().includes(search.toLocaleLowerCase()) || (post.title).toLocaleLowerCase().includes(search.toLocaleLowerCase())));
    setSearchResult(searchResults.reverse());
  },[search,posts])






/* 
useEffect(()=>{
const fetchData=async ()=> {
try {
const response= await api.get('/posts');
setPosts(response.data);  
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
fetchData();

},[])
*/


return(
    <DataContext.Provider value={{posts,setPosts,isLoading,error,setSearch,searchResult}}>

{children}

    </DataContext.Provider>

)


}












export default DataContext;