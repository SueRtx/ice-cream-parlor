import React from "react";
import PropTypes from "prop-types";

function IceDetail(props){
  const { ice, onClickingDelete, onClickingEdit, onClickingSell,  onClickingRestock} = props; 

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
        <h2>INVENTORY<br/><em style={quantityStyles}> REMAIN: {ice.scoops} * SOLD: {ice.sold}</em></h2>

        <button 
          className='crud-button' 
          onClick={() => onClickingSell(ice.id)} 
          hidden={!ice.scoops}>SELL A SCOOP
        </button>
      
        <button 
          className='crud-button' 
          onClick={() => onClickingRestock(ice.id)} 
          hidden={ice.scoops}>RESTOCK ICE CREAM
        </button>
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
