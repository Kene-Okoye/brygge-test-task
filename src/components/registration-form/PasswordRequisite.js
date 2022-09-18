import React from "react";
import "../Form.css";

function PasswordRequisite({ isFocused, passwordRequisites }) {
  const {
    hasUpperCase,
    hasLowerCase,
    hasNumber,
    hasSpecialCharacter,
    hasMinimumCharacters,
  } = passwordRequisites;

  return (
    <div>
      <div
        className={
          isFocused ? "password-message-visible" : "password-message-invisible"
        }
      >
        <strong className="password-rules-heading">
          Das Passwort muss folgende Angaben enthalten:
        </strong>
        <p className={hasUpperCase ? "password-valid" : "password-invalid"}>
          Es muss mind. ein Großsbuchstabe (A - Z) verwendet werden
        </p>
        <p className={hasLowerCase ? "password-valid" : "password-invalid"}>
          Es muss mind. ein Kleinbuschtsabe (a - z) verwendet werden
        </p>
        <p className={hasNumber ? "password-valid" : "password-invalid"}>
          Es muss mind. eine Ziffer (0 - 9) verwendet werden
        </p>
        <p
          className={
            hasSpecialCharacter ? "password-valid" : "password-invalid"
          }
        >
          Es muss mind. eines der folgenden Sonderzeichen verwendet werden:
          *.!@#$%^&_
        </p>
        <p
          className={
            hasMinimumCharacters ? "password-valid" : "password-invalid"
          }
        >
          Das Passwort muss 8 Zeichen lang sein
        </p>
      </div>
    </div>
  );
}

export default PasswordRequisite;
