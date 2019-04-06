// Initializes the `sms` service on path `/sms`
const hooks = require('./sms.hooks');
const twilio = require("twilio");
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

module.exports = function (app) {
  // Initialize our service with any options it requires
  app.use('/sms', {
    async create(data, params) {
    console.log('sms', data, params);
      return twilioClient.messages.create({
        body: data.body,
        from: process.env.COMPANY_NUMBER,
        to: data.to
      });
    }
  });

  // Get our initialized service so that we can register hooks
  const service = app.service('sms');

  service.hooks(hooks);
};

