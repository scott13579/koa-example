const { isNewFeed } = require('../../common/formatter/date');

/** 사이트 메인 페이지 */
exports.home = (ctx, next) => {
    ctx.body = 'Hello World';
}

exports.page = async(ctx, next) => {
    let page = ctx.params.page;
    let content;
    switch (page){
        case 'terms':
            content = "이용약관";
            break;
        case 'policy':
            content = "개인정보 처리방침";
            break;
    }
    await ctx.render('index', { content });
}

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
exports.store = (ctx, next) => {
    let body = ctx.request.body
    ctx.body = body;
    //ctx.body = `피드 작성 완료`;
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