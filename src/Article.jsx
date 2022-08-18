import React from 'react'
import { Card } from 'react-bootstrap';
function Article({ article }) {
  return (
    <>
   <div className="mx-4 my-2">
   <Card style={{ width: 'auto' }}>
      <Card.Img variant="top" src={article.urlToImage} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          {article.description}
        </Card.Text>
       
      </Card.Body>
    </Card>
   </div>
    </>
  )
}

export default Article;