const { authenticate } = require('@feathersjs/authentication').hooks;
const verifyHooks = require('feathers-authentication-management').hooks;
const { hashPassword, protect } = require('@feathersjs/authentication-local').hooks;
const accountService = require('../authmanagement/notifier');
// TODO restore gravatar, we get some error about undefined toLower
//const gravatar = require('../../hooks/gravatar');

module.exports = {
  before: {
    all: [],
    find: [],// authenticate('jwt') ], relax for dev ease
    get: [ authenticate('jwt') ],
    create: [ hashPassword(), verifyHooks.addVerification(), ],//gravatar() ],
    update: [ hashPassword(), authenticate('jwt') ],
    patch: [ hashPassword(), authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [ 
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
    find: [],
    get: [],
    create: [
      context => {
        accountService(context.app).notifier('resendVerifySignup', context.result)
      },
      verifyHooks.removeVerification()
    ],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
