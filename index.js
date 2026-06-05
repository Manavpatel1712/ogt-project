const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('<h3>Welcome to the EJS project</h3>');
});

app.get('/about', (req, res) => {

    var user = [
        { name: 'John Doe', age: 30 },
        { name: 'Jane Doe', age: 25 },
        { name: 'Bob Smith', age: 40 }
    ];
    res.render('about', { items: user });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});