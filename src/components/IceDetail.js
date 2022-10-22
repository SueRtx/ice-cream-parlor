import React from "react";
import PropTypes from "prop-types";

function IceDetail(props){
  const { ice, onClickingDelete, onClickingEdit, onClickingSell } = props; 

  const infoColorStyles = {
    color: 'red',
    fontSize: '30px',
  }

  const quantityStyles = {
    color: 'green',
    fontSize: '25px',
  }

  return (
    <React.Fragment>
        <h1>ICE CREAM DETAILS</h1>
        <h2 style={infoColorStyles}>Brand: {ice.brand} * Flavor: {ice.names} * Price: ${ice.price}</h2>
        <h3>Description: {ice.description}</h3>
        <h3> <em style={quantityStyles}>Scoops Remaining: {ice.scoops}</em></h3>

        <button onClick={() => onClickingEdit(ice.id)} className='crud-button'>Update Ice Cream</button> 
        <button onClick={() => onClickingDelete(ice.id)} className='crud-button'>Delete Ice Cream</button>
        <button onClick={() => onClickingSell(ice.id)} className='crud-button'>Sell Scoop</button>
        <br/>
    </React.Fragment>
  );
}

IceDetail.propTypes = {
  ice: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func
};

export default IceDetail;