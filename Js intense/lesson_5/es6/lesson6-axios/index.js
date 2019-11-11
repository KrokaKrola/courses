import 'babel-polyfill';
import axios from 'axios';

var formData = new FormData();
formData.append('login', 'test');
formData.append('password', '12345');

let test = axios.post('/api/', formData).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.log(error);
});