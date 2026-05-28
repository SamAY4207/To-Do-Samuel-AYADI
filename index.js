import express from "express"
const app = express()
const port = 3000

// On utilise le moteur de template ejs
app.set("view engine", "ejs")

//Mes assets et mon style sont dans le dossier public
app.use(express.static('public'))

//
app.get('/', (req, res) => {
    const user = {
        nom: "Ouillon",
        prenom: "Nicolas",
    }
  res.render("home", {"user" : user})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})