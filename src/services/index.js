const messages = require('./messages/messages.service.js');
const users = require('./users/users.service.js');
const sms = require('./sms/sms.service.js');
const authmanagement = require('./authmanagement/authmanagement.service.js');
module.exports = function (app) {
  app.configure(messages);
  app.configure(users);
  app.configure(sms);
  app.configure(authmanagement);
};
