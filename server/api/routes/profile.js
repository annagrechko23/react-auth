const { Router } = require('express');
const router = Router();
const auth = require('../middleware/auth');
let profile = require('../../data/profile');

router.get('/', auth, async (req, res, next) => {
  try {
    res.json(profile)
  } catch (err) {
    next(err);
  }
});

router.put('/', auth, async (req, res, next) => {
  try {
    profile = { ...profile, ...req.body };
    res.json(profile)
  } catch (err) {
    next(err);
  }
});

module.exports = router;
