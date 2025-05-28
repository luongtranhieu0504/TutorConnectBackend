/**
 * student router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::student.student');

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/students/me',
      handler: 'student.me',
      config: {
        auth: true,
      },
    }
  ]
}
