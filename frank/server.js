const express = require('express')
const app = express()
app.use(express.json());

let users =[
    {id: 1, name: 'jonh', email: 'john@example.com'},
    {id: 2, name: 'jane', email: 'jane@example.com'}
]


app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === persentInt(req.params.id));
    if (!user) {
        return res.status(404).json({message: 'User not found'});
    }
    res.json(user)
});

app.express;

app.listen(3000), () => ({
  console.log('sever runing on pot 3000')
});
