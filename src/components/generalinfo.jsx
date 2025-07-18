
import { useState } from 'react'

export default function GeneralInfo({data,onChange,isEditing}) {
  function handleNameChange (e) {
    onChange('name', e.target.value)
    
  }

  function handleEmailChange(e) {
    onChange('email',e.target.value)
    
  }

  function handlePhoneChange(e) {
    onchange('phone',e.target.value)
    
  }
  return (
      <div className='section'>

      <h1>General Information</h1>
     {isEditing?(
      <>
      <input type="text" placeholder='Name' value={data.name} onChange={handleNameChange}/>
      <input type="email" placeholder='Email' value={data.email} onChange={handleEmailChange} />
      <input type="tel"  placeholder='Phone Number' value={data.phone} onChange={handlePhoneChange}/>
      </>
     )}
      
      </div>
    
  )
}
