const Router = require('@koa/router');
const router = new Router();
const multer = require('@koa/multer');
const path = require('path');
const upload = multer({
    dest: path.resolve(__dirname, '../', 'storage')
})

const {myLogging} = require('./middleware/logging');
const { verify } = require('./middleware/auth');

const webController = require('./web/controller');
const apiUserController = require('./api/user/controller');
const apiFeedController = require('./api/feed/controller');
const apiCommentController = require('./api/comment/controller');

//-------------------------PUBLIC LINE------------------------------
router.use(myLogging);

router.post('/file/upload', upload.single('file'), require('./api/file/controller').upload);
router.get('/file/:id', require('./api/file/controller').download);

router.get('/', myLogging,  webController.home);
router.get('/page/:page', myLogging, webController.page);

router.post('/api/user/login', apiUserController.login);
router.post('/api/user/register', apiUserController.register);



// -------------------------VERIFIY LINE------------------------------
router.use(verify);

router.get('/api/user/:id', apiUserController.info);

router.get('/api/feed', apiFeedController.index);
router.post('/api/feed', apiFeedController.store);
router.get('/api/feed/:id', apiFeedController.show);
router.put('/api/feed/:id', apiFeedController.update);
router.delete('/api/feed/:id', apiFeedController.delete);

router.get('/api/comment', apiCommentController.index);
router.post('/api/comment', apiCommentController.store);
router.get('/api/comment/:id', apiCommentController.show);
router.delete('/api/comment/:id', apiCommentController.delete);

module.exports = router;