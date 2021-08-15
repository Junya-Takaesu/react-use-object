import React, { useState } from "react";

const useStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "rondom message",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "hello world" });
  };

  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button onClick={changeMessage}>change message</button>
    </React.Fragment>
  );
};

export default useStateObject;
