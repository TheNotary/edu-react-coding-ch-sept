import React, { useState, useEffect } from "react";
import InputForm from "./InputForm";

export function sectionALogic(number, len) {
  // const answer = (parseInt(number) + parseInt(len)).toString();
  let numArray = [];
  for (let i = 0; i < len; i++) {
    numArray.push(number + i);
  }
  return numArray;
}

const SectionA = () => {
  const [sectionA, setSectionA] = useState({
    number: "1",
    len: "1",
  });
  const [getAnswer, setAnswer] = useState("None");
  const errors = {};

  useEffect(() => {
    const answer = JSON.stringify(
      sectionALogic(parseInt(sectionA.number), parseInt(sectionA.len))
    );
    setAnswer(answer);
  }, [sectionA]);

  function handleChange({ target: { name, value } }) {
    setSectionA((prevSectionA) => {
      return { ...prevSectionA, [name]: value };
    });
  }

  return (
    <>
      <h1>Section A</h1>
      <div>I'm Section A! Array of multiples.</div>
      <InputForm sectionA={sectionA} onChange={handleChange} errors={errors} />
      <div>
        Answer: <span data-testid="answer">{getAnswer}</span>
      </div>
    </>
  );
};

export default SectionA;
