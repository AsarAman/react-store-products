import express from 'express'
import {createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct} from '../controllers/product.js'

const router = express.Router()

router.get('/', getAllProducts)



router.post('/create', createProduct)
router.get('/:id',  getSingleProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router