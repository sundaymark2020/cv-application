import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo"; 
import EducationalExperience from "./components/EducationalExperience";

export default function App() {
  const [general, setGeneral] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [education, setEducation] = useState({
    school: "",
    title: "",
    date: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  const [isEditingEducation, setIsEditingEducation] = useState(true);

  function handleChange(field, value) {
    setGeneral((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleChangeEducation(field, value) {
    setEducation(function (prev) {
      return {
        ...prev,
        [field]: value,
      };
    });
  }

  function toggleEdit() {
    setIsEditing((prev) => !prev);
  }

  function toggleEditEducation() {
    setIsEditingEducation((prev) => !prev);
  }

  return (
    <div>
      <GeneralInfo
        data={general}
        isEditing={isEditing}
        onChange={handleChange}
      />
      <EducationalExperience
        data={education}
        isEditingEducation={isEditingEducation}
        onChange={handleChangeEducation}
      />

      <button onClick={toggleEdit}>{isEditing ? "Submit" : "Edit"}</button>

      <button onClick={toggleEditEducation}>
        {isEditingEducation ? "submit" : "Edit"}
      </button>
    </div>
  );
}
