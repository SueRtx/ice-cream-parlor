import React from "react";
import PropTypes from "prop-types";

function IceDetail(props){
  const { ice, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment>
      <h1>Ice Cream Details</h1>
      <h3>Brand: {ice.brand} - {ice.names}</h3>
      <p>Price: <em>{ice.price}</em></p>
      
      <button onClick={() => onClickingEdit(ice.id) }>Update Ice Cream</button> 
      <button onClick={()=> onClickingDelete(ice.id) }>Delete Ice Cream</button> 
      <hr/>
    </React.Fragment>
  );
}

IceDetail.propTypes = {
  ice: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default IceDetail;