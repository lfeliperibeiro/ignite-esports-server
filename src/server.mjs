import express from 'express'

const app = express()

app.get('/ads', () => {
    console.log('Running')
})

app.listen(3333)