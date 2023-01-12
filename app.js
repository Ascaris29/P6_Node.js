const express = require('express')
let app = express()
//port pour connecter le serveur
let port = process.env.port || 3000

//Création du serveur 
app.get('/', (req, res) => {
    res.status(200);
    res.send('Vous êtes bien connecté au serveur !')
})
app.listen(port, () => {
    console.log("Vous êtes connecté au port: " + port)
})
//






module.exports = app
