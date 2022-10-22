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
      scoops: ice.scoops,
      id: ice.id}
      );
  }

  return (
    <React.Fragment>
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

