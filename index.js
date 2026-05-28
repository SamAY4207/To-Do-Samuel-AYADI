import express from "express"
const app = express()
const port = 3000

// On utilise le moteur de template ejs
app.set("view engine", "ejs")



//Mes assets et mon style sont dans le dossier public
app.use(express.static('public'))

//Permet de lire correctement les données envoyés par le fomulaire
app.use(express.urlencoded({extended: true}))

//
app.get('/', (req, res) => {
    const user = {
        nom: "Ouillon",
        prenom: "Nicolas",
    }
  res.render("home", {"user" : user})
})

//Route qui affiche le formulaire pour créer une tâche
app.get("/ajouter", (req,rep)=>{
    rep.render("ajouter.ejs")
})

//Route qui reçoit les données du formulaire
app.post("/ajouter",(req,rep)=>{
    console.log(req.body)
})


app.get("/supprimer", (req,rep)=>{
    rep.render("supprimer   .ejs")
})







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})