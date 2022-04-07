const express = require('express')
const PORT = process.env.PORT || 3000

const app = express()

// Routes
app.get('/', (req, res) => {
    console.log('I should see this string in the terminal window')
    res.send("You're a wizard, Harry!");
  });

app.get('/', (req, res) => {
    res.send("Welcome to my webPage")
})

app.get('/favorite-food', (req, res) => {
    res.send('tacos')
})

app.get('/favorite-movie', (req, res) => {
    res.send('Your favorite movie')
})

app.get('/about-me', (req, res) => {
    res.send('This is all about me')
})

app.get('/contact', (req, res) => {
    res.send('you thought I would give my contact out ha')
})

app.get('/article/:slug', (req, res) => {
    console.log(req.params)
    res.send('you found it')
})


app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})