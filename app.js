const axios = require('axios').default;

axios({
  method: 'get',
  url: 'http://10.0.2.15:8081/_explorer/index.html',
  timeout: 5000
}).then(function (response) {
    // handle success
    console.log("success");
    console.log(response);
  }, e => {
    console.log("ERROR: ")
    console.log(e);
  })
