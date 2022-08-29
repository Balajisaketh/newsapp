import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import CarouselItem from './CarouselItem';
import Articles from './Articles';
import Marquee from 'react-fast-marquee';
function App() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {

    axios.get('https://linkshortner.me/api/news').then(res => {
      setArticles(res.data);
    }
    );


  }, [])


  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 mt-2">
            <Marquee speed={10}>
              {
                articles&&articles.map(article => (
                  <div className="mx-4">
                    {article.title}
                  </div>
                ))
              }
            </Marquee>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mt-5">
            <CarouselItem articles={articles} />
          </div>
          <div className="col-md-4 mt-5">
            <Articles articles={ articles} />
            </div>
        </div>

      </div>
    </>
  );
}

export default App;
