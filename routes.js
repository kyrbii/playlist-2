const express = require("express");
const router = express.Router();

const home = require("./controllers/home.js");
const about = require("./controllers/about.js");
const dashboard = require("./controllers/dashboard.js");
const playlist = require("./controllers/playlist.js");

router.get("/", home.index);
router.get("/about", about.index);
router.get("/dashboard", dashboard.index);
router.get('/playlist/:id', playlist.index);
router.get('/playlist/:id/deletesong/:songid', playlist.deleteSong);

router.post('/playlist/:id/addsong', playlist.addSong);
router.post('/dashboard/addplaylist',dashboard.addPlaylist);

module.exports = router;
