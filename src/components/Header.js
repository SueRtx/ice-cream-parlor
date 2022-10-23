import React from "react";
import iceCreamImage from "./../img/ice2.png";
import '../App.css';

function Header(){

  const headerStyles = {
    textAlign: 'center',
    letterSpacing: '3px',
    fontSize: '25px',
    color: 'rgba(63, 218, 216, 1)',
    textShadow: '3px 3px 3px #090000',
  }

  const iceStyles = {
    color: 'rgb(208, 46, 34)',
    letterSpacing: '3px',
    textShadow: '3px 3px 3px rgba(63, 218, 216, 1)',
  }

  return (
    <React.Fragment>
      <div style={headerStyles}>
        <h1>SUNNY <strong style={iceStyles}>* ICE CREAM *</strong> PARLOR</h1>
        <img src={iceCreamImage} alt="Various scoops of ice creams" width='70%'/>
      </div>
    </React.Fragment>
  );
}

export default Header;