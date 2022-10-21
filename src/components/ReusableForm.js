import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <input
          type='text'
          name='names'
          placeholder='Ice Cream Names' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <textarea
          name='price'
          placeholder='Price' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}
ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string.isRequired
};
export default ReusableForm;