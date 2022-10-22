import React from "react";
import Ice from "./Ice";
import PropTypes from "prop-types";

function IceList(props){
  return (
    <React.Fragment>
      
      {props.iceList.map((ice) =>
        <Ice
        whenIceClicked = { props.onIceSelection }
        names={ice.names}
        brand={ice.brand}
        price={ice.price}
        description={ice.description}
        scoops={ice.scoops}
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