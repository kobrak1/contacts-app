import React from 'react'

const FilterForm = ({contacts}) => {
  console.log(contacts)
  return (
    <ul>
      {contacts.map((contact, i) => 
        <li key={i}> {contact.fullname} </li>
      )}
    </ul>
  )
}

export default FilterForm
