const logger = require('../../logger');

module.exports = function(app) {

  function sendSms(sms) {
    return app.service('sms').create(sms).then(function (result) {
      logger.info('Sent sms', result);
    }).catch(err => {
      logger.info('Error sending sms', err);
    })
  }

  return {
    identifyUserProps: ['phoneNumber'],
    notifier: async function(type, user, notifierOptions) {
      const pin = user.verifyShortToken;
      let myUser = await app.service('users').find({id: user.id});
      console.log('notifier', myUser);
      let sms
      switch (type) {
        case 'resendVerifySignup': //sending the user the verification pin
          sms = {
             to: user.phoneNumber,
             body: `Your verification pin is ${pin}`
          }
          return sendSms(sms)
          break

        case 'verifySignup': // confirming verification
          sms = {
             to: user.phoneNumber,
             body: `Your verification pin is ${pin}`
          }
          return sendSms(sms)
          break

        case 'sendResetPwd':
          sms = {}
          return sendSms(sms)
          break

        case 'resetPwd':
          sms = {}
          return sendSms(sms)
          break

        case 'passwordChange':
          sms = {}
          return sendSms(sms)
          break

        case 'identityChange':
          sms = {}
          return sendSms(sms)
          break

        default:
          break
      }
    }
  }
}
