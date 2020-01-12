import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-the-burger-builder-app.firebaseio.com/'
});

export default instance;
