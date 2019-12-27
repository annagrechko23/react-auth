const { Router } = require('express');
const router = Router();
const Token = require('../../lib/Token');
const auth = require('../middleware/auth');
let profile = require('../../data/profile');

router.post('/signin', async (req, res, next) => {
  try {
    res.json({ ...profile, token: Token.create(profile) });
  } catch (err) {
    next(err);
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    res.json({ ...profile, token: Token.create(profile) });
  } catch (err) {
    next(err);
  }
});

router.patch('/refresh', auth.expired, async (req, res, next) => {
  try {
    res.json({ token: Token.create(req.user) });
  } catch (err) {
    next(err);
  }
});

router.post('/signout', auth, async (req, res, next) => {
  try {
    res.json({ status: 'done' })
  } catch (err) {
    next(err);
  }
});

module.exports = router;
