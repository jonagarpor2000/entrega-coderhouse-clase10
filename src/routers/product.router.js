import { Router } from 'express'
import {ProductManager} from '../class/ProductManager.js'

const prodmg = new ProductManager('./src/models/products.json')
const router = Router()

router.get('/', async(req, res) => {
  res.send(await prodmg.getProducts())
})

router.get('/:pid', async(req, res) => {
    const id = Number(req.params.pid)
    const result = await prodmg.getProductById(id)
    return result
})

export default router