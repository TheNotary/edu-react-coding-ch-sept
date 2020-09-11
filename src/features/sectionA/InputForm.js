import React from "react";
import PropTypes from "prop-types";
import TextInput from "../static/TextInput";

const InputForm = ({ sectionA, onChange, errors = {} }) => {
  return (
    <>
      <form autocomplete="off">
        <h2>Form</h2>
        <TextInput
          name="number"
          label="Number"
          value={sectionA.number}
          onChange={onChange}
          error={errors.number}
        />
        <TextInput
          name="len"
          label="Length"
          value={sectionA.len}
          onChange={onChange}
          error={errors.len}
        />
      </form>
    </>
  );
};

InputForm.propTypes = {
  sectionA: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default InputForm;
