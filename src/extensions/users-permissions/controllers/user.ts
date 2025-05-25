const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('plugin::users-permissions.user', ({ strapi }) => ({
  async update(ctx) {
    const userId = ctx.params.id;
    const { type_role, ...rest } = ctx.request.body;

    if (type_role && ['student', 'tutor'].includes(type_role)) {
      // Lấy role tương ứng
      const role = await strapi.db.query('plugin::users-permissions.role').findOne({
        where: { name: type_role }
      });

      if (!role) return ctx.badRequest('Invalid role type');

      // Gán lại role ID
      rest.role = role.id;
    }

    const updatedUser = await strapi.entityService.update('plugin::users-permissions.user', userId, {
      data: rest,
    });

    return { data: updatedUser };
  }
}));
