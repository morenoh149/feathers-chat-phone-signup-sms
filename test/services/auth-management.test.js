const assert = require('assert');
const app = require('../../src/app');

describe('\'authManagement\' service', () => {
  it('registered the service', () => {
    const service = app.service('authmanagement');

    assert.ok(service, 'Registered the service');
  });
});
