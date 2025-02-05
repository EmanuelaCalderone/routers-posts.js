//importo la libreria Express
const express = require('express')

//inizializzo express invocandolo come funzione e salvo risultato in una variabile
const app = express();

//setto la porta che verrà utilizzata dal server per ascoltare la mia richiesta
const port = 3000;

//importo il router dei post
const postRouter = require('./routers/posts');

//imposto la cartella per i file statici
app.use(express.static('public'))

//configuro una rotta per una risorsa definendo la risposta che deve restituire
app.get('/', (req, res) => {
    res.send('Benvenuto nel mio blog'); 
})

//utilizzo la rotta dei post definendo la parte iniziale delle rotte
app.use("/posts", postRouter)

//avvio del server sulla porta specificata
app.listen(port, () => {
    console.log(`Server in ascolto su ${port}`);
})