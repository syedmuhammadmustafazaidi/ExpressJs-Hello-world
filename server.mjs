 
import express from 'express'

const app = express()


//http://192.168.10.2:3001

app.get('/', (req, res) => {
  console.log('Maliha', new Date());
  res.send('Maliha!' + new Date())
})


app.get('/profile', (req, res) => {
  console.log('profile', new Date());
  res.send('profile' + new Date())
})


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`)
})
