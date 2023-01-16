const jwt  = require('jsonwebtoken');

/*
const token = jwt.sign(
    { name : 'tu' },
    'my-secret-key',
    { expiresIn: '1m'},
    (err, token) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(token);
    }
);
*/

jwt.verify(token, 'my-secret=key', (err, decoded) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(decoded);
});