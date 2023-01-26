/**
 * 클라이언트의 요청 IP와, URL을 콘솔에 단순히
 * 출력해주는 로그 함수 
 */
exports.myLogging = async (ctx, next) => {
    let clientIp = ctx.request.ip;
    console.log(`${clientIp.replace("::ffff:","")} 주소에서 요청 :  ${ctx.originalUrl}`);
    await next();
  }