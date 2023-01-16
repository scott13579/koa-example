const Koa = require('koa');
const Router = require('@koa/router');
const bodyPaser = require('koa-bodyparser');
const render = require('koa-ejs');
const path = require('path');
const app = new Koa();
const router = new Router();

// 서버 실행 포트, 환경변수 PORT에 값 없으면 3000번 포트
const port = process.env.PORT || 3000;

// 바디파서 셋팅
// http request의 body 부분을 활용할 수 있도록 해줌
// 라우터 설정보다 위에 해줘야함
app. use(bodyPaser({formLimit : '5mb'}));

// 정적 파일(public 디렉토리를 지정), __dirname은 현재 홈 디렉토리를 의미.
app.use(require('koa-static')(`${__dirname}/public`));

// 라우터 설정
router.use(require('./src/routes').routes());
app.use(router.routes());
app.use(router.allowedMethods());

// EJS 템플릿엔진
render(app, {
    //layout: false,
    layout: 'layout/web',
    root: path.join(__dirname, '/views'),
    viewExt: 'ejs', cache: false,
    cache: false
   });

// 웹 서버 실행
app.listen(port,() =>{
    console.log(`웹 서버가 ${port} 에서 구동 중...`);
});