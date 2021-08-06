# httpie

```bash
TOKEN=$(http -a super_user_client:secret POST 'https://lxjnmskn1znx.xctest.i.ripple.com/oauth/token' 'grant_type==client_credentials' | jq -r .access_token)
```

```bash
cat session.json | jq ".headers.Authorization|=\"Bearer $TOKEN\"" > sg.json
```

```bash
http --session=./sg.json 'https://lxjnmskn1znx.xctest.i.ripple.com/v4/payments?connector_role=RECEIVING&states=ACCEPTED'
```