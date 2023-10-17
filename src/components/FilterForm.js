import React, { useState } from 'react'

const FilterForm = ({contacts}) => {
  const [filterText, setFilterText] = useState('');

  //function to filter the users
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some(key => 
      item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
     )
  })

  return (
    <div className='filter-container'>
      <input 
      style={{width:'250px'}}
        type="text"
        placeholder='Filter contact...'
        value={filterText}
        onChange={e => setFilterText(e.target.value)} />
      <ul style={{display:'flex', flexDirection:'column', minHeight:'100px'}}>
        {filtered.map((person, i) => 
          <li key={i}> {person.fullname} - {person.phone_number} </li>
        )}
      </ul>
    </div>
  )
}

export default FilterForm
