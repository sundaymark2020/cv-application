
import { useState } from 'react'

export default function EducationalExperience({data,isEditingEducation,onChange}) {

  function changeSchoolName(e) {
    onChange('school',e.target.value)
    
  }

  function changeEducationTitle(e) {
    onChange('title', e.target.value)
    
  }

  function changeEducationDate(e) {
    onChange('date', e.target.value)
    
  }
   
  return (
    <div>
      <h1>Education Qualification</h1>
      {isEditingEducation?(
        <>
        <input type="text" name="" id="" placeholder='Enter school name' onChange={changeSchoolName} value={data.school} />
       <input type="text" name="" id="" placeholder='Title of Sturdy' onChange={changeEducationTitle} value={data.title} />
       <input  type='date' name="" id="" placeholder='Enter Date' onChange={changeEducationDate} value={data.date}/>
        </>
      ):(
        <>
        <h1>School: {data.school}</h1>
        <h1>Title of Sturdy: {data.title}</h1>
        <h1>Date: {data.date}</h1>
        </>
      )}
       
    </div>
  )
}
