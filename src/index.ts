'use strict'

import express from 'express'

const app = express()

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router = express.Router()

router.post('/api/test', (req, res) => {
  res.send(req.body)
})

router.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!')
})

app.use(router)

app.listen(3000, () => {
  console.log('Running on http://localhost:3000')
})
