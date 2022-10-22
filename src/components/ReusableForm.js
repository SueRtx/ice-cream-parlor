import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {

  const formStyle = {
    // marginLeft: "37%",
    }

  return (
    <React.Fragment>
      <div style={formStyle}>
      <form onSubmit={props.formSubmissionHandler}>
        <input 
          className='input-text'
          type='text'
          name='brand'
          required='required'
          placeholder='Enter Ice Cream Brand' />  
        <br/>
        <input
          className='input-text'
          type='text'
          name='names'
          required='required'
          placeholder=' Enter Ice Cream Flavor' /> 
        <br/>
        <input
          className='input-text'
          type="number" min="1" step="1"  onkeyup="if(this.value<0){this.value= this.value * -1}"
          name='price'
          required='required'
          placeholder='Enter Ice Cream Price' />
        <br/>
        <input
          className='input-text'
          type='text'
          name='description'
          required='required'
          placeholder=' Enter Ice Cream Description' /> 
        <br/>
        
        <button 
        className='submit-button'
        type='submit'>{props.buttonText}</button>
      </form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string.isRequired
};

export default ReusableForm;