export default (config, { strapi }) => {
  return async (ctx, next) => {
    await next();

    if (
      ctx.body === undefined ||
      ctx.response.is('application/octet-stream') ||
      ctx.body?.status !== undefined
    ) {
      return;
    }

    // Xác định status
    const isError = ctx.status && ctx.status >= 400;
    ctx.body = {
      status: isError ? 'error' : 'ok',
      data: isError ? null : ctx.body,
      message: isError
        ? ctx.body?.error?.message || ctx.body?.message || 'Error'
        : ctx.body?.message || 'Success',
    };
  };
};