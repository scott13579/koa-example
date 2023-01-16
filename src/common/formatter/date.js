const moment = require('moment');

/**
 * 오늘 날짜의 글일 경우 N분전 또는 N시간 전이라고 표기
 * 오늘 이전의 날짜의 글일 경우 YYYY-MM-DD 형식으로 표기
 * @param {string} date 'YYYY-MM-DD HH:mm:ss 형식의 문자
 * @return {string}
 */
exports.dateFromNow = (date) => {

}

/**
 * 현재 등록한 글이 새 글인지 판단해주는 함수
 * 글을 작성한지 10분 이내의 글이라면 true 아니라면 false를 반환
 * @param {string} date 'YYYY-MM-DD HH:mm:ss 형식의 문자
 * @return {bool} 새 글이면 true 아니면 false
 */
exports.isNewFeed = date => {
    let currentTime = moment().add(-10,"minute");
    let feedDate = moment(date);
    return feedDate.isAfter(currentTime);
}