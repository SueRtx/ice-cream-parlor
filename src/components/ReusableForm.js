import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {

  return (
    <React.Fragment>
      <div className='form-box'>
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

        <p>Select Type of Ice Cream</p>
        <select className='select-option ' name='description'>
          <option selected>Classic homemade ice cream</option>
          <option>Sugar free ice cream</option>
          <option>Carb free ice cream</option>
        </select>
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