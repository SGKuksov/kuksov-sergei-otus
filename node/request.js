const http = require('http');

const getRequest = () => {
  const hostname = '127.0.0.1';
  const port = 3000;
  const url = '/';

  http.get(
    {
      hostname,
      port,
      path: url,
      agent: false // Create a new agent just for this one request
    },
    res => {
      // Do stuff with response
      console.log(res.headers.date);
    }
  );
};

const getGroupRequest = async n => {
  for (let i = 0; i < n; i++) {
    await getRequest();
  }
};

getGroupRequest(10);
