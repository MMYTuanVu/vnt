function Socket_IO(socket, app) {
  socket.on('send_Message', (data) => {
    console.log(data);
  });
}
module.exports = Socket_IO;
