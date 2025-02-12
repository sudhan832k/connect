const {
  sendMessage,
  getAllMessageByReceiverId,
} = require("../authorized/modules/auth");

module.exports.joinRoom = (socket, receiverId) => {
  const roomId = [socket.userId, receiverId].sort().join("-");
  socket.join(roomId);
  console.log("userId", socket.userId, roomId);
};

module.exports.messageFromClient = async (
  socket,
  receiverId,
  message,
  chatNamespace
) => {
  console.log(`Message from ${socket.userId} to ${receiverId}: ${message}`);
  await sendMessage(socket.userId, receiverId, message);
  const messages = await getAllMessageByReceiverId(socket.userId, receiverId);
  const roomId = [socket.userId, receiverId].sort().join("-");
  chatNamespace.to(roomId).emit("responseFromServer", {
    messages,
  });
};
