curl --header "Content-Type: application/json" \
  --data "{ 
    \"action\": \"verifySignupShort\", 
    \"value\": {
      \"token\": \"$1\",
      \"user\": {
        \"phoneNumber\": \"5005550006\"
      }
    }
  }" \
http://localhost:3030/authmanagement | jq
