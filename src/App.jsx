
import GeneralInfo from './components/generalinfo'
import { useState } from 'react'

export default function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [general, setGeneral] = useState ({name: '',email: '',phone: '' })
  return (
    <div>
      <GeneralInfo/>

    </div>
  )
}
