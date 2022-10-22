import React from "react";
import iceCreamImage from "./../img/ice.png";
import '../App.css';

function Header(){

  const headerStyles = {
    textAlign: 'center',
    letterSpacing: '3px',
    fontSize: '20px',
    color: 'rgb(124, 233, 139)',
    textShadow: '3px 3px 3px #090000',
  }

  const iceStyles = {
    color: 'rgb(208, 46, 34)',
    textShadow: '3px 3px 3px rgb(124, 233, 139)',
  }

  return (
    <React.Fragment>
      <div style={headerStyles}>
        <h1>SUNNY <strong style={iceStyles}>ICE CREAM</strong> PARLOR</h1>
        <img src={iceCreamImage} alt="Various scoops of ice creams" width='50%'/>
      </div>
    </React.Fragment>
  );
}

export default Header;