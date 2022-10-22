import React from "react";
import PropTypes from "prop-types";

function Ice(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenIceClicked(props.id)}>
        <h3>Brand: {props.brand} - {props.names}</h3>
        <h3><em>${props.price}</em></h3>
        <h3><em>Scoops Remaining: {props.scoops}</em></h3>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Ice.propTypes = {
  brand: PropTypes.string,
  names: PropTypes.string,
  price: PropTypes.number,
  scoops: PropTypes.number,
  id: PropTypes.string, 
  whenIceClicked: PropTypes.func 
};

export default Ice;