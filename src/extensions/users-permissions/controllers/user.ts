const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('plugin::users-permissions.user', ({ strapi }) => ({
  async update(ctx) {
    const userId = ctx.params.id;
    const { type_role, ...rest } = ctx.request.body;

    let updateData = { ...rest };

    if (type_role && ['Student', 'Tutor'].includes(type_role)) {
      // Lấy role tương ứng
      const role = await strapi.db.query('plugin::users-permissions.role').findOne({
        where: { name: type_role }
      });

      if (!role) return ctx.badRequest('Invalid role type');

      // Gán lại role ID và type_role
      updateData.role = role.id;
      updateData.type_role = type_role;
    }

    const updatedUser = await strapi.entityService.update('plugin::users-permissions.user', userId, {
      data: updateData,
    });

    return { data: updatedUser };
  }
}));