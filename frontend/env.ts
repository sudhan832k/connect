export const config = {
  app: {
    name: 'Connect',
  },
  backend: {
    url: 'http://localhost:4000',
    endPoints: {
      signup: '/api/authenticate/signup',
      signin: '/api/authenticate/signin',
    },
  },
};
