import React from 'react';

export default function Generalinfo({ data, isEditing, onChange }) {
  function changeName(e) {
    onChange('name',e.target.value)
    
  }

  function changetel(e) {
    onchange('phone',e.target.value)
    
  }

  function changeemail(e) {
    onChange('email', e.target.value)
    
  }


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
            value={data.phone}
            onChange={changetel}
            
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={data.email}
            onChange={changeemail}
          
          />
        </>
      ) : (
        <>
          <h1>Name: {data.name}</h1>
          <h1>Phone Number: {data.phone}</h1>
          <h1>Email: {data.email}</h1>
        </>
      )}
    </div>
  );
}
