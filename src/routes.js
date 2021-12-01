const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/greet/:name', (req, res) => {
  const uc_name = req.params.name.replace(/^\w/, (c) => c.toUpperCase());
  res.send(`Hello ${uc_name}!`);
})

module.exports = router