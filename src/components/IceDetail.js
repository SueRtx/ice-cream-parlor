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
      
        <h1>* ICE CREAM DETAILS *</h1>
        <div className='detail-box'>
        <button onClick={() => onClickingEdit(ice.id)} className='crud-button'>UPDATE</button> 
        <button onClick={() => onClickingDelete(ice.id)} className='crud-button'>DELETE</button>  
    
        <h2 >BRAND: <em style={infoColorStyles}>{props.names}{ice.brand}</em> - FLAVOR: <em style={infoColorStyles}>{ice.names}</em></h2>
        <h3>{ice.description}</h3>
        <h2>* Price: ${ice.price}.99 *</h2>
        <hr/>
        <h2> INVENTORY<br/><em style={quantityStyles}> REMAIN: {ice.scoops} * SOLD: {ice.sold}</em></h2>
      
        <button onClick={() => onClickingSell(ice.id)} className='crud-button'>SELL ONE SCOOP</button>
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
