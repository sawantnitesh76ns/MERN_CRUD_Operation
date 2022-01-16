import axios from 'axios';

class UserServices {
 async getAllUsers() {
    return await axios.get('http://localhost:8080/api/users');
  }

  registerUser(body) {
    return axios.post('http://localhost:8080/api/users', body);
  }
}

export default new UserServices();
