import express from 'express';
import tvShows from "./models/tv.models.js";
// import router from "./routes/tv.routes.js";

//Create an instance of Express
const app = express();

//Set the http://localhost:8000 location
const port = 8000;

app.use(express.json());
// app.use('/api', router);

//Middleware function
function middleWare(req, res, next) {
    console.log('middleWare');
    next();
}

app.use(middleWare);

//Get All Shows
app.get('/api/tvShows', (req, res) => {
    res.json(tvShows);
});

app.post("/api/tvShows", (req, res) => {
    tvShows.push(req.body);
    console.log(req.body);
    res.json(tvShows);
})

//Get Shows by YEAR
app.get('/api/tvShows/:yearCreated', (req, res) => {
    console.log(req.params.yearCreated);
    const getShowsByYear = tvShows.filter(tvShows => tvShows.yearCreated == req.params.yearCreated)
    res.json(getShowsByYear);
})

//Delete by Title
app.delete("/api/tvShows/:title", (req, res) => {
    const title = req.params.title;
    const updatedShowList = tvShows.filter(show => show.tvShow !== title)
    res.json(updatedShowList)
})

//Patch with Title changes Starring property
app.patch("/api/tvShows/:title", (req, res) => {
    const title = tvShows.tvShow;
    tvShows.forEach((title, idx) => {
        if (title = req.params.title) {
            tvShows.starring = req.body.starring;
        }
    })
    const updatedTvShow = tvShows.find(tvShow => tvShows.title = req.params.title)
    res.json(updatedTvShow)
})

//POST to ADD show


app.listen(port, () => {
    console.log(`Server is running on port ` + port)
})