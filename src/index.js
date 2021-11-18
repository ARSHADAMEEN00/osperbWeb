import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-oldschool-dark'
import axios from 'axios';
// axios.defaults.baseURL =
//     'https://react-course-b798e-default-rtdb.firebaseio.com/';
// // axios.defaults.headers.common['Authorization'] = 'Auth Token';

axios.interceptors.request.use((request) => {
  request.headers.channelName = 'Leela Web Dev';
  return request;
});

axios.interceptors.response.use((response) => {
  return response;
});

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.FADE
}

ReactDOM.render(
  <Provider store={store} >
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById('root')
);
