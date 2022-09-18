import React, { useState } from "react";
import "../Form.css";
import PasswordRequisite from "./PasswordRequisite";

export default function RegistrationForm({ goToLogin }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthdayDay: "",
    birthdayMonth: "",
    birthdayYear: "",
    password: "",
    passwordRepeat: "",
  });
  const [isFocused, setIsFocused] = useState(false);
  const [touchedField, setTouchedField] = useState({
    isTouchedSalutation: false,
    isTouchedFirstName: false,
    isTouchedLastName: false,
    isTouchedEmail: false,
    isTouchedBirthdayDay: false,
    isTouchedBirthdayMonth: false,
    isTouchedBirthdayYear: false,
    isTouchedPassword: false,
    isTouchedPasswordRepeat: false,
  });
  const [passwordRequisites, setpasswordRequisites] = useState({
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialCharacter: false,
    hasMinimumCharacters: false,
  });

  const handleOnKeyUp = () => {
    const upperCaseCheck = /[A-Z]/.test(formData.password);
    const lowerCaseCheck = /[a-z]/.test(formData.password);
    const numberCheck = /[0-9]/.test(formData.password);
    const specialCharacterCheck = /[*.!@#$%^&_]/.test(formData.password);
    const minimumCharactersCheck = formData.password.length >= 8;

    setpasswordRequisites({
      ...passwordRequisites,
      hasUpperCase: upperCaseCheck,
      hasLowerCase: lowerCaseCheck,
      hasNumber: numberCheck,
      hasSpecialCharacter: specialCharacterCheck,
      hasMinimumCharacters: minimumCharactersCheck,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Danke für die Registrierung. Du kannst deine gesamten eingegebenen Daten in der Konsole einsehen. Ich wünsche dir einen schönen Tag ☺"
    );
    console.table(formData);
  };

  return (
    <div className="form-container">
      {/* INTRO MESSAGE */}

      <h1 className="brygge-logo">Bei Brygge Registrieren</h1>
      <p className="intro-message">
        Melden Sie sich bei Brygge und erleben Sie das Gefühl, Ihre Finanzen
        selbst in die Hand zu nehmen, ohne dabei allein zu sein. Kein
        Bankwechsel nötig.
      </p>

      <form onSubmit={handleSubmit}>
        {/* SALUTATION */}

        <div className="input-wrapper">
          {/* BIRTHDAY */}
          <fieldset>
            <legend>Genurtsdatum (erforderlich)</legend>
            <div className="birthday-wrapper">
              {/* DAY */}
              <div className="day">
                <input
                  required
                  value={formData.birthdayDay}
                  type="text"
                  name="day"
                  id="day"
                  aria-describedby="day-message"
                  className={
                    touchedField.isTouchedBirthdayDay &&
                    formData.birthdayDay < 1
                      ? "error-border"
                      : ""
                  }
                  onChange={(e) =>
                    setFormData({ ...formData, birthdayDay: e.target.value })
                  }
                  onBlur={() => {
                    setTouchedField({
                      ...touchedField,
                      isTouchedBirthdayDay: true,
                    });
                  }}
                ></input>
                <label className="birthday-label" htmlFor="day">
                  Tag
                </label>
              </div>

              {/* MONTH */}
              <div className="month">
                <select
                  value={formData.birthdayMonth}
                  required
                  type="text"
                  name="month"
                  id="month"
                  aria-describedby="month-message"
                  className={
                    touchedField.isTouchedBirthdayMonth &&
                    formData.birthdayMonth < 1
                      ? "error-border"
                      : ""
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      birthdayMonth: e.target.value,
                    })
                  }
                  onBlur={() => {
                    setTouchedField({
                      ...touchedField,
                      isTouchedBirthdayMonth: true,
                    });
                  }}
                >
                  <option>-- Monat wahlen --</option>
                  <option>Januar</option>
                  <option>Februar</option>
                  <option>März</option>
                  <option>April</option>
                  <option>Mai</option>
                  <option>Juni</option>
                  <option>Juli</option>
                  <option>August</option>
                  <option>September</option>
                  <option>Oktober</option>
                  <option>November</option>
                  <option>Dezember</option>
                </select>
                <label className="birthday-label" htmlFor="month">
                  Monat
                </label>
              </div>

              {/* YEAR */}
              <div className="year">
                <input
                  required
                  value={formData.birthdayYear}
                  type="text"
                  name="year"
                  id="year"
                  aria-describedby="year-message"
                  className={
                    touchedField.isTouchedBirthdayYear &&
                    formData.birthdayYear < 1
                      ? "error-border"
                      : ""
                  }
                  onChange={(e) =>
                    setFormData({ ...formData, birthdayYear: e.target.value })
                  }
                  onBlur={() => {
                    setTouchedField({
                      ...touchedField,
                      isTouchedBirthdayYear: true,
                    });
                  }}
                />
                <label className="birthday-label" htmlFor="year">
                  Jahr
                </label>
              </div>
              <p
                id="day-message"
                className={`error-message ${
                  touchedField.isTouchedBirthdayDay && formData.birthdayDay < 1
                    ? "show"
                    : "hide"
                }`}
              >
                Bitte geben Sie Ihre Geburtstag ein
              </p>
              <p
                id="month-message"
                className={`error-message ${
                  touchedField.isTouchedBirthdayMonth &&
                  formData.birthdayMonth < 1
                    ? "show"
                    : "hide"
                }`}
              >
                Bitte wahlen Sie Ihre Geburtsmonat
              </p>
              <p
                id="year-message"
                className={`error-message ${
                  touchedField.isTouchedBirthdayYear &&
                  formData.birthdayYear < 1
                    ? "show"
                    : "hide"
                }`}
              >
                Bitte geben Sie Geburtsjahr ein
              </p>
            </div>
          </fieldset>
        </div>

        {/* FIRST NAME */}
        <div className="input-wrapper">
          <label htmlFor="first-name">Vorname (erforderlich)</label>
          <input
            value={formData.firstName}
            id="first-name"
            required
            name="first-name"
            type="text"
            aria-describedby="first-name-message"
            className={
              touchedField.isTouchedFirstName && formData.firstName < 1
                ? "error-border"
                : ""
            }
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            onBlur={() => {
              setTouchedField({
                ...touchedField,
                isTouchedFirstName: true,
              });
            }}
          />
          <p
            id="first-name-message"
            className={`error-message ${
              touchedField.isTouchedFirstName && formData.firstName < 1
                ? "show"
                : "hide"
            }`}
          >
            Bitte geben Sie Ihre Vorname ein
          </p>
        </div>

        {/* LAST NAME */}
        <div className="input-wrapper">
          <label htmlFor="last-name">Nachname (erforderlich)</label>
          <input
            value={formData.lastName}
            id="last-name"
            required
            name="last-name"
            type="text"
            aria-describedby="last-name-message"
            className={
              touchedField.isTouchedLastName && formData.lastName < 1
                ? "error-border"
                : ""
            }
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            onBlur={() => {
              setTouchedField({
                ...touchedField,
                isTouchedLastName: true,
              });
            }}
          />
          <p
            id="last-name-message"
            className={`error-message ${
              touchedField.isTouchedLastName && formData.lastName < 1
                ? "show"
                : "hide"
            }`}
          >
            Bitte geben Sie Ihre Nachname ein
          </p>
        </div>

        {/* EMAIL */}
        <div className="input-wrapper">
          <label htmlFor="email">Email (erforderlich)</label>
          <input
            value={formData.email}
            id="email"
            required
            name="email"
            type="email"
            aria-describedby="email-message"
            className={
              touchedField.isTouchedEmail && formData.email < 1
                ? "error-border"
                : ""
            }
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            onBlur={() => {
              setTouchedField({
                ...touchedField,
                isTouchedEmail: true,
              });
            }}
          />
          <p
            id="email-mesaage"
            className={`error-message ${
              touchedField.isTouchedEmail && formData.email < 1
                ? "show"
                : "hide"
            }`}
          >
            Bitte geben Sie eine gultige E-Mail-Adresse ein
          </p>
        </div>

        {/* PASSWORD */}
        <div className="input-wrapper">
          <label htmlFor="password">Passwort (erforderlich)</label>
          <input
            value={formData.password}
            id="password"
            required
            name="password"
            type="password"
            aria-describedby="password-message"
            className={
              touchedField.isTouchedPassword && formData.password < 1
                ? "error-border"
                : ""
            }
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setTouchedField({
                ...touchedField,
                isTouchedPassword: true,
              });
            }}
            onKeyUp={handleOnKeyUp}
          />
          <p
            id="password-message"
            className={`error-message ${
              touchedField.isTouchedPassword && formData.password < 1
                ? "show"
                : "hide"
            }`}
          >
            Bitte geben Sie eine gultige Passwort ein
          </p>
          <PasswordRequisite
            passwordRequisites={passwordRequisites}
            isFocused={isFocused}
          />
        </div>

        {/*PASSWORD REPEAT */}
        <div className="input-wrapper">
          <label htmlFor="password-repeat">
            Passwort wiederholen (erforderlich)
          </label>
          <input
            value={formData.passwordRepeat}
            id="password-repeat"
            required
            name="password-repeat"
            type="password"
            aria-describedby="password-repeat-message"
            className={
              touchedField.isTouchedPasswordRepeat &&
              formData.passwordRepeat < 1
                ? "error-border"
                : ""
            }
            onChange={(e) =>
              setFormData({ ...formData, passwordRepeat: e.target.value })
            }
            onBlur={() => {
              setTouchedField({
                ...touchedField,
                isTouchedPasswordRepeat: true,
              });
            }}
          />

          <p
            id="password-repeat-message"
            className={`error-message ${
              touchedField.isTouchedPasswordRepeat &&
              formData.passwordRepeat < 1
                ? "show"
                : "hide"
            }`}
          >
            Bitte wiederholen Sie Ihre Passwort
          </p>

          {touchedField.isTouchedPasswordRepeat &&
            formData.passwordRepeat !== formData.password && (
              <p className="error-message">
                Bitte überprufen Sie Ihre Passwort
              </p>
            )}
        </div>
        {/* SUBMIT REGISTRATION */}
        <button type="submit">Jetzt Registrieren</button>
      </form>

      {/* CLOSING MESSAGE - FURTHER INFOS */}
      <div className="further-infos-wrapper">
        <p className="further-infos">
          Mit der Registrerung stimmen Sie{" "}
          <strong>
            <a href="https://www.brygge.eu">AGB's</a>
          </strong>{" "}
          und{" "}
          <strong>
            <a href="https://www.brygge.eu">Datenschutzerklärung</a>
          </strong>{" "}
          zu.
        </p>

        <p className="further-infos">
          Sind Sie bereits Registriert?{" "}
          <strong onClick={goToLogin} className="toggle-mimic">
            {/* <a href="google.com">Dann loggen Sie sich einfach ein</a> */}
            Dann loggen Sie sich einfach ein
          </strong>
          .
        </p>

        <p className="further-infos">
          Haben Sie Schwierigkeiten oder Fragen zur Anmeldung?{" "}
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
