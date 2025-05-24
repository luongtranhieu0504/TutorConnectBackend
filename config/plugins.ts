export default ({ env }) => ({

  host: env('HOST', '0.0.0.0'),
  port: env('PORT'),
  app: {
    keys: env('APP_KEYS'),
  },

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
});