export default ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendgrid', 
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'luongtranhieu2@gmail.com',
        defaultReplyTo: 'luongtranhieu2@gmail.com',
      },
    },
  },
  // ...
  upload: {
    config: {
      providerOptions: {
        localServer: {
          maxage: 300000,
        },
      },
    },
  },
});