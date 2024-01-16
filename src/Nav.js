import React from 'react'
import Form from './Form'
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'
import { useContext } from 'react'
const NAV = () => {
  const {search,setSearch}=useContext(DataContext);
  return (
    
    <nav className='Nav'>

<Form  search={search} setSearch={setSearch} />
<ul>
  <li><Link to={'/'}>Home</Link></li>
  <li><Link to={'/post'}>New post</Link></li>
  <li><Link to={'/about'}>About</Link></li>

</ul>
    </nav>
  )
}

export default NAV