import React, { useState } from "react";
import RegistartionForm from "./registration-form/RegistrationForm";
import LoginForm from "./login-form/LoginForm";

function Form() {
  const [isFormActive, setisFormActive] = useState(false);

  const toggleForm = () => {
    setisFormActive(!isFormActive);
  };

  return (
    <div>
      {" "}
      {isFormActive ? (
        <LoginForm goToRegistration={toggleForm} />
      ) : (
        <RegistartionForm goToLogin={toggleForm} />
      )}
    </div>
  );
}

export default Form;
