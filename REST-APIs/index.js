import express from 'express';
import {v4 as uuidv4} from 'uuid';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

let movies = [
    {
        id: 1,
        title: 'Inception',
        director: 'Christopher Nolan',
        release_date: '2010-07-10'
    },
    {
        id: 2,
        title: 'The Irishman',
        director: 'Martin sorcese',
        release_date: '2019-09-27'
    }
    
]

app.get ('/movies', (req, res) => {
    res.json(movies);
});

app.get ('/movies/:id', (req, res) => {
    const ID = req.params.id
    const movie = movies.find((movie) => movie.id === parseInt(ID));

    if (movie) {
        res.json(movie)
    } else {
        res.status(400).send('Not found');
    }
});

app.post ('/movies', (req, res) => {
    const {title,director,release_date} = req.body;
    const newMovie = {
        id: uuidv4(),
        title,director,release_date
    }

    movies.push(newMovie);
    res.json (movies);
});

app.delete ('/movies/:id', (req,res) => {
    const id = parseInt(req.params.id);

    movies = movies.filter(movie => movie.id !==id)
    res.send('Movie deleted successfully');
})

app.listen (port, () => {
    console.log(`App listening at port: ${port}`)
})