const jwt = require('jsonwebtoken');
/**요청자가 회원 */
exports.verify = async (ctx, next) =>{
    var token = ctx.request.headers['token'];
    await jwt.verify(token, process.env.APP_KEY, async (error,decoded)=>{
        if(error){
            ctx.status = 401;
            ctx.body = '로그인을 해야합니다';
            return;
        }
        // 정상적인 접근이므로, decoded된 정보를 param에 저장
        ctx.request.user = decoded;
        await next();
    });
}