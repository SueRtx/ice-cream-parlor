import React from 'react';
import NewIceForm from './NewIceForm';
import IceList from './IceList';

class IceControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainIceList: [],
      selectedIce: null
    };
    this.handleClick = this.handleClick.bind(this); 
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewIceToList = (newIce) => {
    const newMainIceList = this.state.mainIceList.concat(newIce);
    this.setState({
      mainIceList: newMainIceList,
      formVisibleOnPage: false
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewIceForm onNewIceCreation={this.handleAddingNewIceToList} />
      buttonText = "Return to Ice Cream List";
    } else {
      currentlyVisibleState = <IceList iceList={this.state.mainIceList} />; 
      buttonText = "Add Ice"; 
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </ React.Fragment>
    );
  }

}

export default IceControl;