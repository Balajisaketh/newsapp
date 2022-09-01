import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react'
import  axios  from 'axios';
import NavBar from "./Components/NavBar"
import Marquee from "react-fast-marquee";
import Carouselitems from './Components/Carouselitems';
function App(props) {
  const [Dataa, setDataa] = useState([])
  const[tit,setit]=useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/news").then((resp)=>
    {
          setDataa(resp.data)
        console.log(resp.data,"i am title")
    })
    },[])
  return (
    <div className="container-fluid">
      <div className="row">
 <NavBar/>
      </div>
      <div className='row'>
        <div className='col-md-12'>
        <Marquee speed={1}>
        {
         Dataa?.map(arti=>(
              <p className='mx-4'>{arti.title}</p>
         ))
        }
      </Marquee>
        </div>
      
      </div>
      <div className="row">
 
 <Carouselitems/>
      </div>
    </div>
  );
}

export default App;
