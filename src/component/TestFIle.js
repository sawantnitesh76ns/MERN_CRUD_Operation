import { Component } from "react";
import UserServices from "../api/UserServices";
import HeaderPage from "./Header";

class TestFile extends Component{
    constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      emailaddress: '',
      description: '',
      isUserRegister: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstNameValueChanges = this.handleFirstNameValueChanges.bind(this);
    this.handleLastNameValueChanges = this.handleLastNameValueChanges.bind(this);
    this.handleEmailAddressValueChanges = this.handleEmailAddressValueChanges.bind(this);
    this.handleDescriptionValueChanges = this.handleDescriptionValueChanges.bind(this)

  }

  handleSubmit(event) {
    event.preventDefault();
    var userDetails = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      emailaddress: this.state.emailaddress,
      description: this.state.description
    };

    UserServices.registerUser(userDetails).then((response) =>
    console.log(response),
      this.setState({
        isUserRegister: true
      })
    );  
    
  }

  handleFirstNameValueChanges(event) {
    this.setState({
      firstname: event.target.value
    })
  }

  handleLastNameValueChanges(event) {
    this.setState({
      lastname: event.target.value
    })
  }

  handleEmailAddressValueChanges(event) {
    this.setState({
      emailaddress: event.target.value
    })
  }

  handleDescriptionValueChanges(event) {
    this.setState({
      description: event.target.value
    })
  }

    render() {
        return(
            <div>
                <HeaderPage/>
                <div style={{ width: '200px', textAlign: 'center' }}>
          <form onSubmit={this.handleSubmit}>
              {this.state.isUserRegister? <h>Congratulations !!! you have registered successfukky</h>: <></>}
            <h3>Sign In</h3>
            <div className='form-group'>
              <label>First Name</label>
              <input
              onChange={this.handleFirstNameValueChanges}
                type='text'
                className='form-control'
                placeholder='Enter First Name'
              />
            </div>
            <div className='form-group'>
              <label>Last Name</label>
              <input
              onChange={this.handleLastNameValueChanges}
                type='text'
                className='form-control'
                placeholder='Enter Last Name'
              />
            </div>

            <div className='form-group'>
              <label>Email address</label>
              <input
              onChange={this.handleEmailAddressValueChanges}
                type='email'
                className='form-control'
                placeholder='Enter email'
              />
            </div>

            <div className='form-group'>
              <label>Description</label>
              <input
              onChange={this.handleDescriptionValueChanges}
                type='text'
                className='form-control'
                placeholder='Enter Description'
              />
            </div>

            <button type='submit' className='btn btn-primary btn-block'>
              Submit
            </button>
          </form>
        </div>
            </div>
        )
    }
}

export default TestFile