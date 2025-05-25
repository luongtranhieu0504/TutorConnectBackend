export default (config, { strapi }) => {
  return async (ctx, next) => {
    await next();

    // Chỉ áp dụng cho các route bắt đầu bằng /api
    if (
      !ctx.request.path.startsWith('/api') ||
      ctx.body === undefined ||
      ctx.response.is('application/octet-stream') ||
      ctx.body?.status !== undefined
    ) {
      return;
    }

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