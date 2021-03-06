const express = require('express');

const router = express.Router();

const multer = require('multer');

const checkAuth = require('../middleware/check-auth');

const ProductsController = require('../controllers/products');

var fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter,
});

router.get('/', ProductsController.products_get_all);

router.post('/', checkAuth, upload.single('files'), ProductsController.products_create_product);

router.get('/:productId', ProductsController.products_get_product);

router.patch('/:productId', checkAuth, ProductsController.products_update_product);

router.delete('/:productId', checkAuth, ProductsController.products_delete);

module.exports = router;
