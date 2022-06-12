import React, { useState } from "react";
import "./index.css";
import "./App.css";

function App() {
  const { values, setValues } = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    place: "",
    date: "",
    year: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };
  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handleaddressInputChange = (event) => {
    setValues({ ...values, address: event.target.value });
  };
  const handleplaceInputChange = (event) => {
    setValues({ ...values, place: event.target.value });
  };
  const handledateInputChange = (event) => {
    setValues({ ...values, date: event.target.value });
  };
  const handleyearInputChange = (event) => {
    setValues({ ...values, year: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      values.firstName &&
      values.lastName &&
      values.place &&
      values.date &&
      values.year &&
      values.address &&
      values.email
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };
  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">
            success! thank you for registering{" "}
          </div>
        ) : null}
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? (
          <span>Please enter the email</span>
        ) : null}
        <input
          value={values.lasttName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lasttName ? (
          <span>Please enter the last name</span>
        ) : null}

        <input
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.firstName ? (
          <span>Please enter the email</span>
        ) : null}
        <input
          value={values.address}
          id="phone"
          class="form-field"
          type="text"
          placeholder="address"
          name="address"
        />
        {submitted && !values.lasttName ? (
          <span>Please enter address</span>
        ) : null}
        <input
          value={values.place}
          id="place"
          class="form-field"
          type="text"
          placeholder="place"
          name="place"
        />
        {submitted && !values.place ? (
          <span>Please enter the place</span>
        ) : null}

        <input
          value={values.year}
          id="year"
          class="form-field"
          type="text"
          placeholder="year"
          name="year"
        />
        {submitted && !values.year ? <span>Please enter the year</span> : null}
        <input
          value={values.date}
          id="date"
          class="form-field"
          type="text"
          placeholder="date"
          name="date"
        />
        {submitted && !values.date ? <span>Please enter the date</span> : null}

        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
export default App;
