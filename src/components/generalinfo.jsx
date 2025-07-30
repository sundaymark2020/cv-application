import React from "react";

export default function GeneralInfo({ data, isEditing, onChange }) {
  function changeName(e) {
    onChange("name", e.target.value);
  }

  function changePhone(e) {
    onChange("phone", e.target.value);
  }

  function changeEmail(e) {
    onChange("email", e.target.value);
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
            onChange={changePhone}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={data.email}
            onChange={changeEmail}
          />
        </>
      ) : (
        <>
          <h2>Name: {data.name}</h2>
          <h2>Phone: {data.phone}</h2>
          <h2>Email: {data.email}</h2>
        </>
      )}
    </div>
  );
}
