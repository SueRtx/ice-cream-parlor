import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewIceForm(props){

  function handleNewIceFormSubmission(event) {
    event.preventDefault();
    props.onNewIceCreation({
      brand: event.target.brand.value,
      names: event.target.names.value, 
      price: event.target.price.value,
      description: event.target.description.value,
      scoops: 10,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewIceFormSubmission}
        buttonText="Add New Ice Cream" />
    </React.Fragment>
  );
}

NewIceForm.propTypes = {
  onNewIceCreation: PropTypes.func
};

export default NewIceForm;