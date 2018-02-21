import io from 'socket.io-client/dist/socket.io';

const socket = io('http://localhost:9005', {jsonp: false}); //socket io is used to pass live information between the front end and the back end

socket.on('connected', function(data){
    console.log(data);
})

export default socket;