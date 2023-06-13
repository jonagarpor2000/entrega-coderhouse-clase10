import { Router } from 'express'
import ProductManager from '../../class/ProductManager'
import productRouter from "../../routers/product.router.js"

const prodmg = new ProductManager('./src/models/products.json')

router.get('/', async(req, res) => {
    let allProducts = await prodmg.getProducts()
    res.render('home', { products: allProducts })
  })
