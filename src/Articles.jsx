import React from 'react'
import Article from './Article';
function Articles({ articles }) {

    const [scroll, setScroll] = React.useState(0);

    const handleClick = () => {
        console.log('scroll');
        window.scrollTo(0, 1000);
    }

   


  return (
    <>
    <div className="btn btn-primary" onClick={handleClick} >scroll</div>
    <div  className="d-flex flex-column scroll " id="article">
        {
            articles&&articles.map(article => (
                <Article key={article.url} article={article} />
            ))
        }
        
    </div>
    </>
  )
}

export default Articles;