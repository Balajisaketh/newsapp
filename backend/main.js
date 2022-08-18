const express = require('express');
const app = express();
const axios = require('axios');
app.use(express.json());
const cors=require('cors');
app.use(cors());
const { uuid } = require('uuidv4');
const PORT = process.env.PORT || 4000;

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/testnews').then(() => {
    console.log('connected to mongo');
}).catch(err => {
    console.log('error connecting to mongo', err);
});


const NewsSchema= new mongoose.Schema({
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: String,
    content: String,
    source: String,
    uid: String,
});

const News = mongoose.model('News', NewsSchema);

const getNews=()=>{
    axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=bc878f6352984437a124d46a9cb29ccb')
    .then(response => {
        console.log(response.data.articles);
        response.data.articles.forEach(article => {
            const newArticle = new News({
                title: article.title,
                description: article.description,
                url: article.url,
                urlToImage: article.urlToImage,
                publishedAt: article.publishedAt,
                content: article.content,
                source: article.source.name,
                uid: uuid(),
            });
            newArticle.save().then(() => {
                console.log('saved to mongo');
            }).catch(err => {
                console.log('error saving to mongo', err);
            });

        
        }).catch(err => {
            console.log('error getting news', err);
        });
    }).catch(err => {
        console.log(err);
    }
    );
}

// getNews();


app.get('/news', (req, res) => {
    News.find({}).sort({publishedAt: -1}).limit(20).then(news => {
        res.send(news);
    }).catch(err => {
        console.log(err);
    }
    );
}
);



app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
}
);


