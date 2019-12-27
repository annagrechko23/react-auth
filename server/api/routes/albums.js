const { Router } = require('express');
const router = Router();
const auth = require('../middleware/auth');
let albums = require('../../data/albums');

router.get('/', auth, async (req, res, next) => {
  try {
    res.json(albums)
  } catch (err) {
    next(err);
  }
});

router.get('/:id', auth, async (req, res, next) => {
  try {
    res.json(albums.find(album => album.id === Number(req.params.id)))
  } catch (err) {
    next(err);
  }
});

router.put('/:id', auth, async (req, res, next) => {
  try {
    albums[albums.findIndex((album => album.id === Number(req.params.id)))] = req.body;
    res.json(albums[albums.findIndex((album => album.id === Number(req.params.id)))])
  } catch (err) {
    next(err);
  }
});

module.exports = router;
