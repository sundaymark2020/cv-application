import React from "react";

export default function PracticalExperience({
  data,
  isEditingExperience,
  onChange,
}) {
  function changeCompany(e) {
    onChange("company", e.target.value);
  }

  function changePosition(e) {
    onChange("position", e.target.value);
  }

  function changeResponsibilities(e) {
    onChange("responsibility", e.target.value);
  }
  return (
    <div>
      <h1>Practical Experience</h1>
      {isEditingExperience ? (
        <>
          <input
            type="text"
            placeholder="Enter Company Name"
            onChange={changeCompany}
          />
          <input
            type="text"
            placeholder="Enter Position"
            onChange={changePosition}
          />
          <input
            type="text"
            placeholder="Enter Responsibilities"
            onChange={changeResponsibilities}
          />
        </>
      ) : (
        <>
          <h1>Company name : {data.company}</h1>
          <h1>Position: {data.position}</h1>
          <h1>Responsibility: {data.responsibility}</h1>
        </>
      )}
    </div>
  );
}
