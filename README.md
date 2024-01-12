# email

📧 Email

## 使用说明

### .env 文件中配置

```env
NODEMAILER_HOST="smtp.forwardemail.net"
NODEMAILER_PORT="465"
NODEMAILER_SECURE="true"
NODEMAILER_AUTH_USER="REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM"
NODEMAILER_AUTH_PASS="REPLACE-WITH-YOUR-GENERATED-PASSWORD"
```

### fetch

```js
const response = await fetch('http://localhost:3000/', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    // https://nodemailer.com/
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: 'bar@example.com, baz@example.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body
  }),
})

const json = await response.json()

console.log(json)
```

### docker compose

```yml
version: '3'

services:
  proxy:
    image: tlyboy/email
    restart: unless-stopped
    network_mode: host
    environment:
      - PORT=3000
      - NODEMAILER_HOST=smtp.forwardemail.net
      - NODEMAILER_PORT=465
      - NODEMAILER_SECURE=true
      - NODEMAILER_AUTH_USER=REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM
      - NODEMAILER_AUTH_PASS=REPLACE-WITH-YOUR-GENERATED-PASSWORD
```
