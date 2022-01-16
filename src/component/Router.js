import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderPage from './Header';
import TestFile from './TestFIle';
import GetAllUsers from './GetAllUsers';
import UserRegister from './UserRegister';

class RouterPage extends Component {
  render() {
    return (
      <Router>
        <>
          <Routes>
            <Route exact path='/' element={<TestFile />}></Route>
            <Route exact path='/getAllUsers' element={<GetAllUsers />}></Route>
          </Routes>
        </>
      </Router>
    );
  }
}

export default RouterPage;
