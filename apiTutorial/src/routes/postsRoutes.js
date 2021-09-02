const express = require("express");
const router = express.Router();
const multer = require("multer");
const multerConfig = require("../config/multer");

const postControllers = require("../controllers/postControllers");

router.put("/:id", postControllers.postUpdate);
