import React from 'react';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import NEWnavbar from './NEWnavbar';
import {useEffect} from 'react'
import axios from 'axios';
import { useState } from 'react';
import Articles from './Articles';
function Hero() {
    const [Data, setData] = React.useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/news").then((resp)=>
        {
              setData(resp.data)

              console.log(resp,"i am resp data")
          
        })
        },[])
    return (
      <>
      <NEWnavbar/>
      <div className='md:hidden mx-auto d-flex flex-column mt-5'>
          <div className='d-flex flex-row' style={{justifyContent:'space-between'}}>
            <p style={{marginLeft: '20px'}}>Randm text</p>
            <div className='d-flex flex-row' style={{marginRight: '20px'}}>
                <WarningAmberIcon/>

                <p>Report</p>
            </div>

          </div>
            <div className='back mx-auto my-auto mt-3' style={{width:'100vw',height:"50vh",backgroundColor:'black',position:'relative'}}>
                <div className='my-auto d-flex flex-column' style={{zindex:'10' ,backgroundColor:'white',marginLeft:"50%"}}>
                    <PlayCircleOutlineIcon style={{zIndex: '10',color:'white',position:'absolute',top:'40%'}} fontSize="large"/>
                 
              <p className='abcs  text-center' style={{zIndex: '10',color:'white',position:'absolute',top:'53%',textAlign:'center',left:"45%"}}>Click to play</p>

                </div>

            </div>
            <button className="mx-auto mt-3 p-3" style={{width:'40vw',height:"auto",border:"none",backgroundColor:"#ff2e67",borderRadius:"4px",color:"white"}}>Play online</button>
            <div className='col-sm-12 d-flex flex-column' style={{PaddingBottom:"12%"}}>
       {
        Data.map(newdata =>(
          <>
          
          
          <Articles Title={newdata.title} cntx={newdata.content} imag={newdata.urlToImage} uid={newdata.uid}/>
          </>
        ))
       }
    

       </div>
    </div>
    </>
  )
}

export default Hero