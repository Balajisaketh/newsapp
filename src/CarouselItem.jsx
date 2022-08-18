import React from 'react'
import { Carousel } from 'react-bootstrap'

function CarouselItem({ articles }) {

  return (
    <>
    <Carousel>
     {
        articles.map(article => (
          <Carousel.Item>
          <img
            className="d-block w-100"
            src={article.urlToImage}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='m-3' style={{backgroundColor:'rgba(0,0,0,0.6)'}}>{article.title}</h3>
            <p className='m-3' style={{backgroundColor:'rgba(0,0,0,0.6)'}}>{article.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        ))
     }
      
    </Carousel>
    </>
  )
}

export default CarouselItem;