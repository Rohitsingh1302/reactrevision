import  { useState } from "react";
function Formtopic(){
                                            // state for form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
    // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully");
    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <div >
      <h2>React Basic Form</h2>
      <form onSubmit={handleSubmit}>
    <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Formtopic;

