import React from 'react'
import Card from 'react-bootstrap/Card';
function Articles(props) {
    function handleclick(uid)
    {
        window.location.href='/detailed/'+uid 
        console.log(uid);
    }

  return (
    <div className='mx-4 my-3' >
  
  <Card style={{ width: 'auto' }} onClick={()=>handleclick(props.uid)}>
      <Card.Img variant="top" src={props.imag} />
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
          {props.cntx}
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
    
    
  )
}

export default Articles