import React from "react";
import PropTypes from "prop-types";

function IceDetail(props){
  const { ice, onClickingDelete, onClickingEdit, onClickingSell } = props; 

  const infoColorStyles = {
    color: 'red',
  }

  const quantityStyles = {
    color: 'red',
    fontSize: '25px',
  }

  return (
    <React.Fragment>
      <div className='detail-box'>
        <h1>* ICE CREAM DETAILS *</h1>
        <button onClick={() => onClickingEdit(ice.id)} className='crud-button'>UPDATE</button> 
        <button onClick={() => onClickingDelete(ice.id)} className='crud-button'>DELETE</button>  
        
        <hr/>
        <h2 >BRAND: <em style={infoColorStyles}>{props.names}{ice.brand}</em> - FLAVOR: <em style={infoColorStyles}>{ice.names}</em></h2>
        <h3>Description: {ice.description}</h3>
        <h2>* Price: ${ice.price}.99 *</h2>
        <h3> <em style={quantityStyles}>Scoops Remaining: {ice.scoops}</em></h3>

        {/* <button onClick={() => onClickingEdit(ice.id)} className='crud-button'>UPDATE</button> 
        <button onClick={() => onClickingDelete(ice.id)} className='crud-button'>DELETE</button> */}
        <button onClick={() => onClickingSell(ice.id)} className='crud-button'>SELL</button>
        <br/>
      </div>
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
