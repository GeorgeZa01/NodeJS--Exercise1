//Import Express module
import express from 'express';

//Creating app and port var
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

//GET Method
app.get('/products', (req, res) => {
    res.json({message: 'This is the GET product path'});
});

app.get('/users', (req, res) => {
    res.json({message:'This is the GET users path'});
});

//POST Method
app.post('/users', (req, res) => {
    res.json({message: 'This is the post path and user was added'});
});

app.post('/products', (req, res) => {
    res.json({message: 'This is the post path and product was added'});
});

// PUT Method
app.put('/users', (req, res) => {
    res.json({message: 'This is the put path and users was updated'});
});
app.put('/products', (req, res) => {
    res.send({message: 'This is the put path and products was updated'});
});

//DELETE Method 
app.delete('/users', (req, res) => { 
    res.json({message: 'This is the delete path and user was deleted'});
});
app.delete('/products', (req, res) => { 
    res.json({message: 'This is the delete path and product was deleted'});
});

//PATCh Method
app.patch('/users', (req, res) => {
    res.json({message: 'This is the patch path and user was updated'});
});

app.patch('/products', (req, res) => {
    res.json({message: 'This is the patch path and product was updated'});
});


