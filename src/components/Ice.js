import React from "react";
import PropTypes from "prop-types";

function Ice(props){

  const infoColorStyles = {
    color: 'rgb(208, 46, 34)',
    fontSize: '25px',
    letterSpacing: '2px',
  }

  const quantityStyles = {
    color: 'green',
    fontSize: '25px',
    letterSpacing: '2px',
  }

  return (
    <React.Fragment>
      <div className='list-box'>
        <div onClick = {() => props.whenIceClicked(props.id)}>
          <h2 >FLAVOR: <em style={infoColorStyles}>{props.names}</em> - PRICE: <em style={infoColorStyles}>${props.price}.99</em></h2>
          <h3><em style={quantityStyles}>Scoops Remaining: {props.scoops}</em></h3>
          <h3><em style={quantityStyles}>Scoops Sold: {props.sold}</em></h3>
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
  sold: PropTypes.number,
  id: PropTypes.string, 
  whenIceClicked: PropTypes.func 
};

export default Ice;



