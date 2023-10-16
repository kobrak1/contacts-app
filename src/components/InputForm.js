import React from 'react'
import { useState } from 'react'

const InputForm = () => {
    const [form, setForm] = useState({'fullname':'', 'phone_number':''})
    const onChangeInput = (e => setForm({...form, [e.target.name]:e.target.value}))
    const sendInfo = (e) => {
      e.preventDefault()
      console.log(form)
    }

  return (
    <form className='form' action="#" onSubmit={sendInfo}>
      <input 
          type="text"
          name='fullname'
          onChange={onChangeInput}
          placeholder='Enter name...' />
      <input 
          type="text"
          name='phone_number'
          onChange={onChangeInput}
          placeholder='Enter number...' />
      <input 
          type="submit"
          value={'Add'} />
    </form>
    
  )
}

export default InputForm
