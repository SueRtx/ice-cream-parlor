import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function IceEditForm(props){
  const { ice } = props;

  function handleIceEditFormSubmission(event) {
    event.preventDefault();
    props.onIceEdit({
      names: event.target.names.value, 
      brand: event.target.brand.value, 
      price: event.target.price.value, 
      description: event.target.description.value, 
      scoops: ice.scoops,
      id: ice.id}
      );
    }

    const iceNameStyles = {
      textAlign: 'center',
      letterSpacing: '3px',
      fontSize: '35px',
      color: 'rgb(208, 46, 34)',
    }
  
  return (
    <React.Fragment>
      <h2>UPDATE: <em style={iceNameStyles}>{ice.names} Ice Cream </em></h2>
      <ReusableForm 
        formSubmissionHandler={handleIceEditFormSubmission}
        buttonText="Update Ice Cream" />
    </React.Fragment>
  );
}

IceEditForm.propTypes = {
  ice: PropTypes.object,
  onIceEdit: PropTypes.func
};

export default IceEditForm;

