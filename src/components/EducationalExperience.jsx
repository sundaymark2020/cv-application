
import { useState } from 'react'

export default function EducationalExperience() {

    const[name, setname] = useState('')
    function changeUserName(event) {
       setname(event.target.value)
    }
  return (
    <div>
        <input type="text" value={name}  onChange={changeUserName}/>
       <h1>Your Name is {name} </h1> 
    </div>
  )
}
