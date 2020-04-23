# kwjs-app

Demo react-native app from the April 2020 kwjavascript meetup.

## Getting started

### Server

Clone the kwjs-server repo, which can be found here:
https://github.com/lucasgladding/kwjs-server

The react-native app needs to connect through HTTPS, where the certificate is trusted by the device. For the presentation, I used `ngrok http 3000`, then used the secure URL from ngrok.

### App

1. `git clone git@github.com:lucasgladding/kwjs-react-native-demo.git`
2. `cd kwjs-react-native-demo`
3. `yarn`
4. Update the host in `config/services.json` to match the secure URL for the server.
4. `yarn start`

## Configuration

Services use the host defined in the services config. Please note that the host should not include the trailing slash.  i.e. `https://abcd1234.ngrok.io`
