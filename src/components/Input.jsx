import React from "react";

function Input({ type = "text", state, setState, id, placeholder }) {
  return (
    <div className=" w-50 m-auto ">
      <div className="form-floating mb-3 needs-validation">
        <input
          type={type}
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="form-control"
          id={id}
          placeholder={placeholder}
          required
        />
        <label htmlFor={id}>{placeholder}</label>
      </div>
    </div>
  );
}

export default Input;
