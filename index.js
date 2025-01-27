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
app.get('/', (req, res) => {
    res.send('Hello World');
});

//POST Method
app.post('/', (req, res) => {
    res.send('Hello World');
});

// PUT Method
app.put('/', (req, res) => {
    res.send('Hello World');
});

//DELETE Method 
app.delete('/', (req, res) => { 
    res.send('Hello World');
});

//PATCh Method
app.patch('/', (req, res) => {
    res.send('Hello World');
});


