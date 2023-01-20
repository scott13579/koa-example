//const { isNewFeed } = require('../../common/formatter/date');
const { store } = require('./query');
// const { upload } = require('../file/query');

/** 전체 피드 보기 */
exports.index = (ctx, next) => {
    /* 아래 방식과 똑같다.
    let query = ctx.query;
    query.color
    query.size
    query.count
    */
    let {color, size, count} = ctx.query; // 위 방식과 똑같다.
    
    let result = isNewFeed("2023-01-12 15:11");
    console.log(`새 글인가요?${result}`);
    ctx.body = query;
    //ctx.body = `피드 리스트`;
}

/** 새 피드 작성 처리 */
exports.store =  async (ctx, next) => {

    let { image_id, content } = ctx.request.body;
    let user = ctx.request.user; //  decoded : 유저에 대한 모든 정보가 담겨 있음.

    let item =  await store(user.id, image_id, content);

    if (item == null){
        ctx.body = "에러";
    } else {
        ctx.body = "성공";
    }
}

/** 피드 상세 보기 */
exports.show = (ctx, next) => {
    let id = ctx.params.id;
    ctx.body = `${id} 피드 상세`;
}

/** 피드 수정 */
exports.update = (ctx, next) => {
    let id = ctx.params.id;
    ctx.body = `${id} 피드 수정`;
}

/** 피드 삭제 */
exports.delete = (ctx, next) => {
    let id = ctx.params.id;
    ctx.body = `${id} 피드 수정`;
}