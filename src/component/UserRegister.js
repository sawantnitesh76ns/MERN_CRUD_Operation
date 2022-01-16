import { Component } from 'react';
import Header from './Header';
import UserServices from '../api/UserServices';

class UserRegister extends Component {

  render() {
    return (
      <div>
        <div style={{ width: '200px', textAlign: 'center' }}>
          <form>
            <h3>Sign In</h3>
            <div className='form-group'>
              <label>First Name</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter First Name'
              />
            </div>
            <div className='form-group'>
              <label>Last Name</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Last Name'
              />
            </div>

            <div className='form-group'>
              <label>Email address</label>
              <input
                type='email'
                className='form-control'
                placeholder='Enter email'
              />
            </div>

            <div className='form-group'>
              <label>Description</label>
              <input
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
    );
  }
}

export default UserRegister;
