import React from "react";
import PropTypes from "prop-types";

function SunnyIcet(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenIceClicked(props.id)}>

      <h3>Brand: {props.brand} - {props.name}</h3>
        <p><em>${props.price}</em></p>

        <hr/>
      </div>
    </React.Fragment>
  );
}

Ice.propTypes = {
  names: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string, 
  whenIceClicked: PropTypes.func 
};

export default Ice;