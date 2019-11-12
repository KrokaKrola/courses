import axios from 'axios';

let server = axios.create({
	baseURL: '/api/'
});

server.interceptors.request.use(function(request){
    request.headers.Autorization = 'test';
    return request;
});

server.interceptors.response.use(function(response){
    /*if(typeof response.data !== "object"){
        throw new Error("server did not send json");
    }*/

    return response;
});

export default server;