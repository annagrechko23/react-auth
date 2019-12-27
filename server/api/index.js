const { Router } = require('express');
// const glob = require('glob');
const bodyParser = require('body-parser');
const errors = require('./middleware/errors');
const profile = require('./routes/profile');
const auth = require('./routes/auth');
const albums = require('./routes/albums');

const router = Router();

router.use(bodyParser.json());

router.use('/profile', profile);
router.use('/auth', auth);
router.use('/albums', albums);

// glob
//   .sync('./routes/**.js', { cwd: __dirname })
//   .forEach(path => {
//     const routes = require(path);
//     router.use('/api', routes);
//   });

router.use(errors);

module.exports = router;
