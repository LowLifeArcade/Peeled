import React from 'react'

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '841043464753-5fid4h1f1gsfj343jrvq2i1uii507cmj.apps.googleusercontent.com',
        scope: 'email'
      })
    });
  }
  render() {
    return <div>Google Auth</div>
  }
};

export default GoogleAuth;