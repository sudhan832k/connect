export const config = {
  app: {
    name: 'Connect',
  },
  socket: {
    nameSpaces: {
      privatechat: '/chat',
    },
  },
  backend: {
    url: 'http://localhost:4000',
    endPoints: {
      signup: '/api/authenticate/signup',
      signin: '/api/authenticate/signin',
      allusers: '/api/auth/getallusers',
      allfriends: '/api/auth/getallfriends',
      getuserprofile: '/api/auth/getuserprofile',
      getmessages: '/api/auth/getmessagebyreceiverid',
      sendmessage: '/api/auth/sendmessage',
    },
  },
};
