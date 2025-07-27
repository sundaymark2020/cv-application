import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo'; // Importing the child component
import EducationalExperience from './components/EducationalExperience';

export default function App() {
  // State to hold general information (name, phone, email)
  
  const [general, setGeneral] = useState({
    name: '',
    phone: '',
    email: '',
  });

  // State to control whether we are editing or viewing the info
  const [isEditing, setIsEditing] = useState(true);

  // Function to update specific field values (name, phone, or email)
  function handleChange(field, value) {
    setGeneral(prev => ({
      ...prev,            // Keep the previous values
      [field]: value,     // Update only the changed field
    }));
  }

  // Function to toggle between edit mode and view mode
  function toggleEdit() {
    setIsEditing(prev => !prev); // Flip the boolean value
  }

  return (
    <div>
      {/* Passing state and functions as props to GeneralInfo component */}
      <GeneralInfo
        data={general}
        isEditing={isEditing}
        onChange={handleChange}
      />

      {/* Button toggles between 'Submit' and 'Edit' based on current mode */}
      <button onClick={toggleEdit}>
        {isEditing ? 'Submit' : 'Edit'}
      </button>
    </div>
     
  );
 
}
