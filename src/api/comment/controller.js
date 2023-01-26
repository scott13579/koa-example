const query = require('./query')

exports.index = async (ctx, next) =>{
    let response = await query.index();
    ctx.body = response;
    console.log('index입니다');
}

exports.store = async (ctx, next) =>{
    // content, 피드 id를 받아옴
    let {content, feed_id} = ctx.request.body;
    //decoded 된 값을 가져옴
    let user = ctx.request.user;

    let result = await query.store(user.id, content, feed_id);

    if(result.affectedRows > 0) {
        ctx.body = { result: "ok", id: result.insertId }
      } else {
        ctx.body = { result: "fail", }
      }
}

exports.show = async (ctx, next) =>{
    let id = ctx.params.id;
    let user = ctx.request.user;
    console.log('show입니다');
    let item = await query.show(id);
    item['is_me'] = (user.id === item.user_id);
    
    // console.log(`${user.id}/${item.user_id}/${item.is_me}`);

    ctx.body = item;
}

exports.delete = async (ctx, next) => {
  // 코멘트 아이디가 넘어옴 id로
  let id = ctx.params.id;

  let result = await query.delete(id);
  console.log(`삭제입니다.`);
  
  if(result.affectedRows > 0) {
    ctx.body = { result: "ok", id }
  } else {
    ctx.body = { result: "fail", }
  }
}