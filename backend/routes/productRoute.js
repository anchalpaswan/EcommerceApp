const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.get('/products', getAllProducts)

router
    .post('/admin/products/new', isAuthenticatedUser, authorizeRoles("admin"), createProduct)

router
    .route('/admin/products/:id')
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)
    .get(getProductDetails)

router.get("/product/:id", getProductDetails)
module.exports = router;