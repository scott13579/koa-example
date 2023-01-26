const {pool} = require('../../data');

exports.index = async () => {
    const query = `SELECT comment.*, u.name user_name FROM comment
	LEFT JOIN user u on u.id = comment.user_id
	JOIN feed where feed.id = comment.feed_id
    ORDER BY comment.id ASC;`;
    /*const query = `SELECT comment.*, u.name user_name FROM comment
	LEFT JOIN user u on u.id = comment.user_id
	JOIN feed f on f.id = comment.feed_id
    where 37 = comment.feed_id
    ORDER BY comment.id ASC;`*/
    result = await pool(query);
    
    return result;
}

exports.store = async (userId, content, feedId) => {
    const query = `INSERT INTO comment
    (user_id, content, feed_id)
    VALUES (?,?,?)`;

    return await pool(query, [userId, content, feedId]);
}

exports.show = async (id) => {
    const query = `SELECT comment.*, u.name user_name FROM comment
	LEFT JOIN user u on u.id = comment.user_id
	JOIN feed f on f.id = comment.feed_id
    where ? = comment.feed_id
    ORDER BY comment.id ASC;`
    
    return result = await pool(query, [id]); //피드에 대한 id다
  }

exports.update = async () => {

}

exports.delete = async id => {
    return await pool(`DELETE FROM comment WHERE id = ?`, [id]);
}