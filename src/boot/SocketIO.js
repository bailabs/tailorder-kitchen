import SocketIOClient from "socket.io-client";

export default function(address, states) {
  const socket = new SocketIOClient(address);

  socket.on('connect', function() {
    console.log('Connected to TailOrder');
    socket.on('message', function(message) {
      if (message.is_additional) {
        console.log("additional");
      } else {
        console.log("dili additional");
      }
    });
  });
}