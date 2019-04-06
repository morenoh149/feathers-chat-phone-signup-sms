curl --header "Content-Type: application/json" \
  --data '{ "to": "5005550006", "body": "a test sms triggered from a curl"}' \
http://localhost:3030/sms  | jq
