import React from 'react'
import Feed from './Feed'
import { useContext} from 'react'
import DataContext from './context/DataContext'
const Home = () => {

  const {searchResult,isLoading,error}=useContext(DataContext);
  
  return (
    
    <main className="Home">

      {isLoading && <p className='statusMsg'>wait,Data are loading .........</p>}
      {!isLoading && error && <p style={{color:'red'}}>{error}</p>}
      {!isLoading && !error && (searchResult.length ? <Feed posts={searchResult} />:<p>No posts in the moments, mabe later ...</p>)}


    </main>
  )
}

export default Home