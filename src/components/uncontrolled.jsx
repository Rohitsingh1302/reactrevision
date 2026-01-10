import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Name: " + nameRef.current.value);
  };

  return (
    <div>
      <h2>Uncontrolled Form</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
