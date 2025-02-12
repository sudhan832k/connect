const socketIo = require("socket.io");
const { socketUserAuth } = require("../middleware/socket");
const { joinRoom, messageFromClient } = require("../src/socket/listeners");

module.exports.setupSocket = (server) => {
  const io = socketIo(server, {
    cors: {
      origin: "http://localhost:4200", // Allow requests from the frontend
      methods: ["GET", "POST"], // Allow these HTTP methods
      credentials: true, // Allow cookies to be sent
    },
  });
  const chatNamespace = io.of("/chat");

  // Middleware for authentication
  chatNamespace.use(socketUserAuth);

  // Handle connection
  chatNamespace.on("connection", (socket) => {
    console.log(`User connected: ${socket.userId}`);

    socket.on("joinRoom", (receiverId) => {
      joinRoom(socket, receiverId);
    });

    // Handle private messages
    socket.on("messageFromClient", async ({ receiverId, message }) => {
      await messageFromClient(socket, receiverId, message, chatNamespace);
    });

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.userId}`);
    });
  });
};
