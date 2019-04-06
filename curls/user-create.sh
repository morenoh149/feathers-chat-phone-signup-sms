curl --header "Content-Type: application/json" \
  --data "{ \"phoneNumber\": \"$1\" }" \
http://localhost:3030/users  | jq
