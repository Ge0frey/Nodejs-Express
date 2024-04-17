import express from 'express';
import userRoutes from './routes/api/Users.js';

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use ('/api/Users', userRoutes)

app.listen(3000, () => {
    console.log(`Server started on port 3000`)
})