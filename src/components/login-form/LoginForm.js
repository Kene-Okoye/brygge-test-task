import React, { useState } from "react";
import "../Form.css";

function LoginForm({ goToRegistration }) {
  const [isUserNameValid, setisUserNameValid] = useState(false);
  const [isUserNameFocused, setIsUserNameFocused] = useState(false);
  const [loginData, setloginData] = useState({
    userName: "",
    password: "",
  });

  const handleEmailValidation = () => {
    const emailCheck = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      loginData.userName
    );
    setisUserNameValid(emailCheck);
  };

  const [touchedField, setTouchedField] = useState({
    isTouchedUserName: false,
    isTouchedPassword: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Danke für die Anmeldung. Du kannst deine gesamten eingegebenen Daten in der Konsole einsehen. Ich wünsche dir einen schönen Tag ☺"
    );
    console.table(loginData);
  };

  return (
    <div className="form-container">
      {/* INTRO MESSAGE */}

      <h1 className="brygge-logo">Bei Brygge Einloggen</h1>
      <p className="intro-message">
        Geben Sie Ihre Anmeldedaten ein, um sich anzumelden
      </p>

      {/* onSubmit={handleSubmit} */}
      <form onSubmit={handleSubmit}>
        {/* USERNAME NAME */}
        <div className="input-wrapper">
          <label htmlFor="user-name">
            Benutzername - entweder Ihren Vornamen oder Ihre E-Mail-Adresse
            (erforderlich)
          </label>
          <input
            id="user-name"
            required
            value={loginData.userName}
            name="user-name"
            type="text"
            aria-describedby="user-name-message"
            className={
              touchedField.isTouchedUserName && loginData.userName < 1
                ? "error-border"
                : ""
            }
            onKeyUp={handleEmailValidation}
            onFocus={() => setIsUserNameFocused(true)}
            onChange={(e) =>
              setloginData({ ...loginData, userName: e.target.value })
            }
            onBlur={() => {
              setTouchedField({
                ...touchedField,
                isTouchedUserName: true,
              });
            }}
          />
          <p
            id="user-name-message"
            className={`error-message ${
              (isUserNameFocused && !isUserNameValid) ||
              (touchedField.isTouchedUserName && loginData.userName < 1)
                ? "show"
                : "hide"
            }`}
          >
            Bitte geben Sie Ihre Vorname order Ihre E-Mail-Adresse ein
          </p>
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Passwort (erforderlich)</label>
          <input
            id="password"
            required
            value={loginData.password}
            name="password"
            type="password"
            aria-describedby="password-login-message"
            className={
              touchedField.isTouchedPassword && loginData.password < 1
                ? "error-border"
                : ""
            }
            onChange={(e) =>
              setloginData({ ...loginData, password: e.target.value })
            }
            onBlur={() => {
              setTouchedField({
                ...touchedField,
                isTouchedPassword: true,
              });
            }}
          />
          <p
            id="password-login-message"
            className={`error-message ${
              touchedField.isTouchedPassword && loginData.password < 1
                ? "show"
                : "hide"
            }`}
          >
            Bitte geben Sie Ihre Vorname ein
          </p>
        </div>

        {/* LOGIN */}
        <button type="submit">Anmelden</button>
      </form>

      {/* CLOSING MESSAGE - FURTHER INFOS */}
      <div className="further-infos-wrapper">
        <p className="further-infos">
          Haben Sie Ihren{" "}
          <strong>
            <a href="google.com">Benutzernamen vergessen?</a>
          </strong>
        </p>

        <p className="further-infos">
          Haben Sie Ihr{" "}
          <strong>
            <a href="https://www.brygge.eu/kontakt">Passwort vergessen?</a>
          </strong>
        </p>

        <p className="further-infos">
          Noch nich registriert?{" "}
          <strong onClick={goToRegistration} className="toggle-mimic">
            {/* <a href="google.com">Dann registrieren Sie</a> */}
            Dann registrieren Sie
          </strong>
          .
        </p>

        <p className="further-infos">
          Haben Sie Schwierigkeiten oder Fragen zur einloggen?{" "}
          <strong>
            <a href="https://www.brygge.eu/kontakt">
              Kontaktieren Sie uns einfach
            </a>
          </strong>
          .
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
