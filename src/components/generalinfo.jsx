
import React from 'react';

// This is a functional component that accepts props from the parent
// Props:
// - data: an object with { name, phone, email }
// - isEditing: a boolean that controls whether to show inputs or text
// - onChange: a function to update individual fields (name, phone, or email)
export default function GeneralInfo({ data, isEditing, onChange }) {

  // Function to handle changes in the Name input
  function changeName(e) {
    // Call the parent’s onChange function and pass new value for 'name'
    onChange('name', e.target.value);
  }

  // Function to handle changes in the Phone input
  function changePhone(e) {
    // Call the parent’s onChange function and pass new value for 'phone'
    onChange('phone', e.target.value);
  }

  // Function to handle changes in the Email input
  function changeEmail(e) {
    // Call the parent’s onChange function and pass new value for 'email'
    onChange('email', e.target.value);
  }

  // Render section
  return (
    <div>
      <h1>General Information</h1>

      
      {isEditing ? (
        
        <>
          <input
            type="text"
            placeholder="Enter Name"
            value={data.name}        
            onChange={changeName}      
          />
          <input
            type="tel"
            placeholder="Enter Phone Number"
            value={data.phone}         // Controlled value from state
            onChange={changePhone}     // Updates parent state on change
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={data.email}         // Controlled value from state
            onChange={changeEmail}     // Updates parent state on change
          />
        </>
      ) : (
        // If false, display the entered information as static text
        <>
          <h2>Name: {data.name}</h2>
          <h2>Phone: {data.phone}</h2>
          <h2>Email: {data.email}</h2>
        </>
      )}
    </div>
  );
}
