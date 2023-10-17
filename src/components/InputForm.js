import React from 'react'
import { useState } from 'react'

const InputForm = ({addContact, contacts}) => {
    const [form, setForm] = useState({fullname:'', phone_number:''})

    // function that sets the current data
    const onChangeInput = (e => setForm({...form, [e.target.name]:e.target.value}))

    // function that sets the main data
    const sendInfo = (e) => {
      e.preventDefault()
      if (form.fullname === '' || form.phone_number === '') {
        return alert('You have to fill both input fields.') && false
      }
      addContact([...contacts, form])
      console.log(form)
      setForm({fullname:'', phone_number:''})
    }

  return (
    <form className='form' action="#" onSubmit={sendInfo}>
      <div className="name">
        <input 
          style={{width:'250px', height:'1.5rem'}}
          type="text"
          name='fullname'
          value={form.fullname}
          onChange={onChangeInput}
          placeholder='Enter name...' />
      </div>
      <br />
      <div className="number">
        <input 
          style={{width:'250px', height:'1.5rem'}}
          type="text"
          name='phone_number'
          value={form.phone_number}
          onChange={onChangeInput}
          placeholder='Enter number...' />
      </div>
      <br />
      <div className="submitBtn">
        <input 
          type="submit"
          value={'Add'} />
      </div>
    </form> 
  )
}

export default InputForm
