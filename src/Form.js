import React from 'react'

const Form = ({search,setSearch}) => {
  return (
   <form className='searchForm' onSubmit={(e)=>(e.preventDefault())}>

<input type='text' placeholder='what your are searching' id='search' value={search} onChange={(e)=>(setSearch(e.target.value))}>

</input>
<label htmlFor='search'>search:</label>

   </form>
  )
}

export default Form