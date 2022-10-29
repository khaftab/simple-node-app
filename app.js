const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
app.get('/get', (req, res, next) => {
  res.status(300).json({ message: 'Get route' })
})