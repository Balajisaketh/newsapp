import React from 'react'
import {useParams} from 'react-router-dom'
import {useEffect} from 'react'
import axios from 'axios'
function Detailed() {
    let val=useParams();
    console.log(val)
    useEffect(()=>
    {
        console.log(val);
        
    },[val])
  return (
    <div>
        detailed {val.id}
        
    </div>
  )
}

export default Detailed