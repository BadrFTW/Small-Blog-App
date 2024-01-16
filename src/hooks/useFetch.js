
import { useEffect,useState } from "react";
import axios from "axios";
const useFetch=(DATA_URL)=>{
const [isLoading,setIsLoading]=useState(false);
const [data,setData]=useState([]);
 const [error,setError]=useState(null);



useEffect(()=>{
    let isMounted=true;
const cancelTokenSource = axios.CancelToken.source();
const fetchData=async (URL)=>{
    try {
setIsLoading(true)

const Data=await axios.get(URL,{cancelToken: cancelTokenSource.token })

if(isMounted)
{ setData(Data.data);
    setError(null);
}
}catch (err) {
    if(isMounted)
    {
        setError(err.message);
        setData([]);
    }
        
    }finally{
       
     if(isMounted) 
     {setTimeout(() => {
        setIsLoading(false)
        
       }, 3000);}
    
    }
    
}
fetchData(DATA_URL);
const cleanUp=()=>{
    isMounted=false;
    cancelTokenSource.cancel('ending');   
}

return cleanUp ;


},[DATA_URL]);

return({isLoading,data,error});

} 

export default useFetch;