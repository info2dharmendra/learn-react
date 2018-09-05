import React, {Component, ReactPropTypes  } from "react";


class Form extends Component{
    // static propTypes = {
    //     addBookAction : ReactPropTypes.func.isRequired
    // };
    
    constructor(props){
        super(props);
        this.state =  {titleValue: '',priceValue: '',authorId :'', firstName:'',lastName:''};
    }

    handleButtonClick = (event) =>{
        event.preventDefault();
        const min = 1;
        const max = 100;
        this.state.authorId = Math.round(min + Math.random() * (max - min));
        this.props.addBookAction(
            //document.getElementById("titleInput").value,
            //document.getElementById("priceInput").value
            //this.refs.titleInput.value,
            //this.refs.priceInput.value,
            this.state.titleValue,
            this.state.priceValue,
            this.state.authorId,
            this.state.firstName,
            this.state.lastName
        );

        this.setState({titleValue: '',priceValue: '',authorId :'', firstName:'',lastName:''});
    }

    handleTitleChange = (event) =>{
        this.setState({titleValue : event.target.value});
    }

    handlePriceChange = (event) =>{
        this.setState({ priceValue : event.target.value});
    }

    handleFirstNameChange = (event) =>{
        this.setState({ firstName : event.target.value});
    }

    handleLastNameChange = (event) =>{
        this.setState({ lastName : event.target.value});
    }

    render(){
        return(
            <div className="Form">
                <div>Book title : <input type="text" placeholder="Book title" value={this.state.titleValue} onChange={this.handleTitleChange}/></div>
                <div>Book price : <input type="text" placeholder="Book price" value={this.state.priceValue} onChange={this.handlePriceChange}/></div>
                <div>Author first name : <input type="text" placeholder="Author Firstname" value={this.state.firstName} onChange={this.handleFirstNameChange}/></div>
                <div>Author last name : <input type="text" placeholder="Authoer Lastname" value={this.state.lastName} onChange={this.handleLastNameChange}/></div>
                <button onClick={this.handleButtonClick}>Add Book</button>
            </div>
        );
    }
}

export default Form;