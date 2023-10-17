import React, { useEffect, useState } from 'react'
import './App.css'
import InputForm from './components/InputForm'
import FilterForm from './components/FilterForm'


function App() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    console.log(contacts)
  }, [contacts])

  return (
    <div className='App'>
      <h2>Contact List</h2>
      <FilterForm contacts={contacts} />
      <InputForm addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default App
