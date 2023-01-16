const jwt = require('jsonwebtoken');
const SECRET_KEY = 'my-secret-key';

exports.info = (ctx, next) => {
    // let id = ctx.params.id;
    // ctx.body = `${id} 회원에 대한 정보`;
}

exports.register = async (ctx, next) => {
    // 회원가입 처리 모듈

    // let token = await generateToken({name : 'my-name'});
    // ctx.body = token;
}

exports.login = async (ctx, next) => {
    // 로그인 모듈
    // let id = ctx.request.body;
    // let pw = ctx.request.body;
    let { id, pw } = ctx.request.body;
    let result = "";
    
    if (id === 'admin' && pw === '1234') {  // 계정이 있는 경우 토큰 발급
        result = await generateToken({name : 'my-name'});
    }
    else {  // 계정이 틀린 경우
        result = "아이디 혹은 패스워드가 올바르지 않습니다.";
    }
    //let token = await generateToken({name : 'my-name'});
    ctx.body = result;
}

let generateToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, SECRET_KEY, (error, token) => {
            if (error) { reject(error); }
            resolve(token);
        })
    })
}