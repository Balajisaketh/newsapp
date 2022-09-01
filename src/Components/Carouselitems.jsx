import React from 'react'
import {useEffect} from 'react'
import axios from 'axios'
import {Carousel} from 'react-bootstrap'
import Articles from './Articles'
import Hero from './Hero'
function Carouselitems(props) {
    const [Data, setData] = React.useState([])
   const[title,settitle]=React.useState("")
   function handleclick(uid)
   {
       window.location.href='/detailed/'+uid 
       console.log(uid);
   }

    useEffect(() => {
    axios.get("http://localhost:3000/news").then((resp)=>
    {
          setData(resp.data)
          console.log(resp)
      
    })
    },[])
  return (
    <div className='d-flex flex-row col-md-12'> 
      <div className='col-md-8 p-3'>
         <Carousel>
      {
        Data.map(newdata =>(
          <Carousel.Item>
            
          <img
            className="d-block w-100" style={{objectFit:"contain"}}
            src={newdata.urlToImage}
        
          />
          <Carousel.Caption>
            <h3>{newdata.title}</h3>
            <p>{newdata.content}</p>
          </Carousel.Caption>
        </Carousel.Item> 
        )
         

        )
        
      }
       </Carousel>
      
       </div>
       
       <div className='col-md-4 d-flex flex-column' style={{PaddingBottom:"12%"}}>
       {
        Data.map(newdata =>(
          <>
          
          
          <Articles Title={newdata.title} cntx={newdata.content} imag={newdata.urlToImage} uid={newdata.uid}/>
          </>
        ))
       }
       <Hero data={Data}/>

       </div>
    </div>
  )
}

export default Carouselitems