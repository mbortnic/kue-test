var kue = require('kue');
var q = kue.createQueue({
  prefix: 'q',
  redis: {
    port: 6379,
    host: '127.0.0.1',
    auth: ''
  }
});
kue.app.listen(3000);