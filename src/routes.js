const Router = require('@koa/router');
const router = new Router();

const webController = require('./web/controller');
const apiUserController = require('./api/user/controller');
const apiFeedController = require('./api/feed/controller');

router.get('/',webController.home);
router.get('/page/:name',webController.page);

router.get('/api/user/:id', apiUserController.info);

router.get('/api/feed', apiFeedController.index);
router.post('/api/feed', apiFeedController.store);
router.get('/api/feed/:id', apiFeedController.show);
router.put('/api/feed/:id', apiFeedController.update);
router.delete('/api/feed/:id', apiFeedController.delete);
module.exports = router; 