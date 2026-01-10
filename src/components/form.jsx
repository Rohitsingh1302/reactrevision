import { useState } from "react";

function Formtopic() {
  // state for form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // state for errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    // Name validation
    if (name === "") {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    // Email validation
    if (email === "") {
      setEmailError("Email is required");
      isValid = false;
    } else {
      setEmailError("");
    }

    // submit only if valid
    if (isValid) {
      alert("Form Submitted Successfully");
      console.log("Name:", name);
      console.log("Email:", email);
    }
  };

  return (
    <div>
      <h2>React Basic Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p style={{ color: "red" }}>{nameError}</p>
        </div>

        <br />

        {/* Email */}
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p style={{ color: "red" }}>{emailError}</p>
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Formtopic;
