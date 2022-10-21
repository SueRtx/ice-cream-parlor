import React from "react";
import iceCreamImage from "./../img/ice.png";

function Header(){
  return (
    <React.Fragment>
      <h1>Sunny Ice Cream</h1>
      <img src={iceCreamImage} alt="Various scoops of ice creams" width='50%'/>
    </React.Fragment>
  );
}

export default Header;