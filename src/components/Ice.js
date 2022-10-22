import React from "react";
import PropTypes from "prop-types";

function Ice(props){

  const infoColorStyles = {
    color: 'rgb(208, 46, 34)',
    fontSize: '30px',
    letterSpacing: '2px',
  }

  const descriptionColorStyles = {
    color: 'black',
    fontSize: '20px',
    letterSpacing: '2px',
  }

  const quantityStyles = {
    color: 'green',
    fontSize: '25px',
    letterSpacing: '2px',
  }

  return (
    <React.Fragment>
      <div className='detail-box'>
        <div onClick = {() => props.whenIceClicked(props.id)}>
          <h2 style={infoColorStyles}>BRAND: {props.brand} * FLAVOR: {props.names} * PRICE: ${props.price} </h2>
          <h3 style={descriptionColorStyles}>Description: {props.description}</h3>
          <h3><em style={quantityStyles}>Scoops Remaining: {props.scoops}</em></h3>
          
        </div>
      </div>
    </React.Fragment>
  );
}

Ice.propTypes = {
  brand: PropTypes.string,
  names: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  scoops: PropTypes.number,
  id: PropTypes.string, 
  whenIceClicked: PropTypes.func 
};

export default Ice;