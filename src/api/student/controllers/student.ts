/**
 * student controller
 */

const { sanitize } = require('@strapi/utils');

module.exports = {
  async me(ctx) {
    const user = ctx.state.user;
    if (!user) return ctx.unauthorized("Not authenticated");

    const student = await strapi.db.query("api::student.student").findOne({
      where: { user: user.id },
      populate: ['user'],
    });

    if (!student) return ctx.notFound("Student not found");

    return await sanitize.contentAPI.output(
      student,
      strapi.getModel("api::student.student"),
      ctx.state.auth
    );
  }
};

