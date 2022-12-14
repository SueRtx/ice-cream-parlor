import React from 'react';
import NewIceForm from './NewIceForm';
import IceCreamList from './IceCreamList';
import IceDetail from './IceDetail';
import IceEditForm from './IceEditForm';
import { v4 } from 'uuid';

class IceControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainIceCreamList: [
        { id: v4(), 
          brand: "Blue Ribbon", 
          names: "Orange", 
          price: "5",
          description: "Sugar free ice cream", 
          scoops: 30,
          sold: 0
        },
        { id: v4(),
          brand: "Blue Ribbon",
          names: "Strawberry",
          price: "4",
          description: "Classic homemade ice cream", 
          scoops: 30,
          sold: 0
        }
      ],
      selectedIce: null,
      editing: false 
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedIce != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedIce: null,
        editing: false 
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewIceToList = (newIce) => {
    const newMainIceCreamList = this.state.mainIceCreamList.concat(newIce);
    this.setState({
      mainIceCreamList: newMainIceCreamList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedIce = (id) => {
    const selectedIce = this.state.mainIceCreamList.filter(ice => ice.id === id)[0];
    this.setState({selectedIce: selectedIce});
  }
  
  handleDeletingIce = (id) => {
    const newMainIceCreamList = this.state.mainIceCreamList.filter(ice => ice.id !== id);
    this.setState({
      mainIceCreamList: newMainIceCreamList,
      selectedIce: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingIceInList = (iceToEdit) => {
    const editedMainIceCreamList = this.state.mainIceCreamList
      .filter(ice => ice.id !== this.state.selectedIce.id)
      .concat(iceToEdit);
    this.setState({
      mainIceCreamList: editedMainIceCreamList,
      editing: false,
      selectedIce: null
    });
  }

  handleScoopSales = () => {
    const iceToChange = this.state.selectedIce;
    if (this.state.selectedIce.scoops !== 0){
      const scoopsToSell = {
        name: iceToChange.name,
        brand: iceToChange.brand,
        price: iceToChange.price,
        description: iceToChange.description,
        scoops: iceToChange.scoops -= 1,
        sold: iceToChange.sold += 1,
        id: iceToChange.id,
        key: iceToChange.id
      }
      this.handleChangingSelectedIce(scoopsToSell.id)   
    } else {
      const scoopsToRestock = {
        name: iceToChange.name,
        brand: iceToChange.brand,
        price: iceToChange.price,
        description: iceToChange.description,
        scoops: iceToChange.scoops = 30,
        sold: iceToChange.sold = 0,
        id: iceToChange.id,
        key: iceToChange.id 
    } 
    this.handleChangingSelectedIce(scoopsToRestock.id)
  }
}

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing ) {      
      currentlyVisibleState = <IceEditForm 
      ice = {this.state.selectedIce} 
      onIceEdit = {this.handleEditingIceInList} />
      buttonText = "Return to Ice Cream List";

    } else if (this.state.selectedIce != null) {
      currentlyVisibleState = <IceDetail 
      ice = {this.state.selectedIce} 
      onClickingDelete = {this.handleDeletingIce} 
      onClickingEdit = {this.handleEditClick} 
      onClickingSell = {this.handleScoopSales}
      onClickingRestock = {this.handleScoopSales} />
      buttonText="Return to Ice Cream List";

    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewIceForm 
      onNewIceCreation = {this.handleAddingNewIceToList} />;
      buttonText = "Return to Ice Cream List";

    } else {
      currentlyVisibleState = <IceCreamList 
      iceCreamList = {this.state.mainIceCreamList} 
      onIceSelection = {this.handleChangingSelectedIce} />;
      buttonText = "Add Ice Cream";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick} className='submit-button'>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default IceControl;