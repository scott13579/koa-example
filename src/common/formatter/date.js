const moment = require('moment');

exports.dateFromNow = (date) =>{
    moment().format();
    //오늘 날짜인지 확인
    //맞다면 n분전 또는 n시간 전으로 표기
    //오늘 이전이라면 YYYY-MM-DD로 표기
    /* if(moment.date(date) == moment())
            return moment().hour() - moment(date).hour();
        else
            reutrn moment.date(date); */
}
/**
 * 새 10분을 기반으로 새글인지 판단
 * @date 2023-01-12
 * @param {string} date 
 * @returns {boolean} 새글이면 true 아니면 false
 */
exports.isNewFeed = date =>{
    let currentTime = moment().add(-10, 'minute');
    let feedDate = moment().date(date);
    //console.log(feedDate);
    return feedDate.isAfter(currentTime);
}