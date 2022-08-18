import React from 'react'
import Article from './Article';
function Articles({ articles }) {
  return (
    <>
    <div className="d-flex flex-column">
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