import React from "react";
import Ice from "./Ice";
import PropTypes from "prop-types";

function IceList(props){

  const instructionStyles = {
    color: 'rgb(208, 46, 34)',
    marginTop: '-25px'
  }
  return (
    <React.Fragment>
      <h1>* ICE CREAM LIST *</h1>
      <h3 style={instructionStyles}>(Click on box below to see details)</h3>
      {props.iceList.map((ice) =>
        <Ice
        whenIceClicked = { props.onIceSelection }
        names={ice.names}
        brand={ice.brand}
        price={parseInt(ice.price)}
        description={ice.description}
        scoops={ice.scoops}
        sold={ice.sold}
        id={ice.id}
        key={ice.id}/>
      )}
    </React.Fragment>
  );
}

IceList.propTypes = {
  iceList: PropTypes.array,
  onIceSelection: PropTypes.func
};

export default IceList;