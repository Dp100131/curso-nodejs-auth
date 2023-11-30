const axios = require('axios');

const url = 'http://localhost:3000/api/v1/categories';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEzLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDEzMDQ4Nzh9.4czHWyh-9hwkNsB_2XRXnH2fh0TJvaWaUgZoCUrI9n8';

const data = {
  name: 'new dsff',
  image: 'http://localhost:3000/api/v1/categories',
};

axios.post(url, data, {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
})
  .then(response => {
    console.log('Respuesta:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });