import React from 'react'

export default function PracticalExperience({data,isEditingExperience,onChange}) {
  function changeCompany(e) {
    onChange('company', e.target.value)
    
  }

  function changePosition(e) {
    onChange('position', e.target.value)
  }

  function changeResponsibilities(e) {
    onChange('responsibility',e.target.value)
    
  }
  return (
    <div>
      <h1>Practical Experience</h1>
      <input type="text"  placeholder='Enter Company Name' onChange={changeCompany}/>
      <input type="text" placeholder='Enter Position' onChange={changePosition}/>
      <input type="text" placeholder='Enter Responsibilities' onChange={changeResponsibilities}/>
    </div>
  )
}
