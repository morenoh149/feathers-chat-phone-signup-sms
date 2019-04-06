# feathers-chat-phone-signup-sms

Based off https://github.com/feathersjs/feathers-chat 2019-04-06.
The goal of this repo is to provide a proof of concept for a user registration
via phone number. Phone number is the primary key and we verify control of the
number by sending a pin via sms and verifying the user after the pin is sent to
the api. Work in progress.

## Running

1. `npm install`
1. `cp .env.template .env` and add your Twilio secrets
1. `npm run dev` for nodemon or `npm start` for production

## Testing

There are some curl requests in /curls. They typically pipe responses to `jq` so
install that for more readable responses.

1. `brew install jq`
1. `sh user-create.sh 5005550006` creates an unverified user and sends an sms
1. `sh user-read.sh` lists users, you can get the pin number by reading this
1. `sh user-verify.sh <pin number>` verifies the user

## TODO

* issue jwt to verified users
* enforce authorization by jwt and verified user accounts
