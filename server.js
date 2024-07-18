const express = require('express')
const app = express()
const items = require('./router/items')
const products = require('./router/products')

app.use('/items',items)
app.use('/products',products)
app.listen(5000)