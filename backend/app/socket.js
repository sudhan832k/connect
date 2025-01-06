const socketIo = require("socket.io");
const cookie = require("cookie");
const { getUser } = require("../src/common/user");

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
  chatNamespace.use(async (socket, next) => {
    const cookies = socket.handshake.headers.cookie;
    ``;

    if (cookies) {
      // Parse cookies
      const parsedCookies = cookie.parse(cookies);
      console.log("cookiesss", parsedCookies);
      const userId = parsedCookies.userId;
      if (userId) {
        try {
          const user = await getUser({ _id: userId });
          if (!user)
            return next(new Error("Authentication failed: Invalid userId"));
          socket.userId = userId;
          return next();
        } catch (error) {
          return next(new Error(error));
        }
      } else {
        return next(new Error("Authentication failed: No userId found"));
      }
    } else {
      return next(new Error("Authentication failed: No cookies sent"));
    }
  });

  // Handle connection
  chatNamespace.on("connection", (socket) => {
    console.log(`User connected: ${socket.userId}`);

    socket.on("joinRoom", (receiverId) => {
      const roomId = [socket.userId, receiverId].sort().join("-");
      socket.join(roomId);
      console.log("userId", socket.userId, roomId);
      // Access handshake to set a cookie
      // const res = socket.request.res || {}; // Get the response object
      // if (res) {
      //   console.log(res);
      //   res.setHeader(
      //     "Set-Cookie",
      //     `roomId=${roomId}; HttpOnly; Secure; Path=/`
      //   );
      // }
    });

    // Handle private messages
    socket.on("messageFromClient", ({ receiverId, message }) => {
      console.log(`Message from ${socket.userId} to ${receiverId}: ${message}`);

      // Emit message to the recipient's room
      const roomId = [socket.userId, receiverId].sort().join("-");
      chatNamespace.to(roomId).emit("responseFromServer", {
        senderId: socket.userId,
        message,
      });
    });

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.userId}`);
    });
  });
};
