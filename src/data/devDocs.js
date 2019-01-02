export const devDocs = {
  base:'dev',
  head:'Developer Documentation',
  docs:[
    {
      title:'Getting Started',
      route:'getting-started',
      children:[
        { title:'Setting up for Web Applications', route:'setting-up-for-web-apps' },
        { title:'Setting up for Native Applications', route:'setting-up-for-native-apps',
          children:[
            { title:'Native Connections', route:'native-connect' },
            { title:'Promise/Future Resolution', route:'native-promises' },
            { title:'Pairing with Scatter', route:'native-pairing' },
            { title:'Sending API Requests', route:'native-sending-requests' },
            { title:'Catching Responses', route:'native-catching-responses' },
          ] },
      ]
    },
    {
      title:'Examples',
      route:'examples',
      children:[
        { title:'Interaction Flow', route:'examples-interaction-flow' },
      ]
    },
    {
      title:'Supported Blockchains',
      route:'supported-blockchains',
    },
    {
      title:'Networks',
      route:'networks',
    },
    {
      title:'Requirable Fields',
      route:'requirable-fields',
    },
    {
      title:'Identities',
      route:'identities',
    },
    {
      title:'Signature Providers',
      route:'signature-providers',
    },
    {
      title:'API Reference',
      route:'api-reference',
      children:[
        { title:'Login / Get Identity', route:'api-get-identity' },
        { title:'Logout / Forget Identity', route:'api-forget-identity' },
        { title:'Identity From Permissions', route:'api-identity-from-permissions' },
        { title:'Authenticate', route:'api-authenticate' },
        { title:'Suggest Network', route:'api-suggest-network' },
        { title:'Get Public Key', route:'api-get-public-key' },
        { title:'Link Account', route:'api-link-account' },
        { title:'Create Transaction', route:'api-create-transaction' },
        { title:'Request Signature', route:'api-request-signature' },
        { title:'Request Arbitrary Signature', route:'api-request-arbitrary-signature' },
        { title:'Request Transfer', route:'api-request-transfer' },
        { title:'Get Version', route:'api-get-version' },
      ]
    },
  ],
};
