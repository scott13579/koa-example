const jwt = require('jsonwebtoken');
const SECRET_KEY = 'my-secret-key';

exports.verify = async (ctx, next) => {
    var token = ctx.request.headers['token']
    await jwt.verify(token, process.env.APP_KEY, async (error, decoded) => {
        if(error) {
            ctx.body = `에러`;
            return;
        }
        ctx.request.user = decoded;
        await next();
    })
}