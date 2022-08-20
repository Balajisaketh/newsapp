import React from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from './NavBar';

function Detailed() {

    let params = useParams();
    const [article,setArticle]= React.useState(null);
    React.useEffect(() => {
        axios.get("http://localhost:4000/getNews/"+params.id).then(response => {
            setArticle(response.data);
        });
    } , []);

  


  return (
   <>
   <NavBar/>
   <div className="d-flex flex-column text-center">
   {
            article!=null && (
                <>
                <div className="my-4">
                    <h3>{article.title}</h3>
                    </div>
                <div className="my-4">
                    <img src={article.urlToImage} style={{width:'auto',
                height:'400px'}} alt=""/>
                </div>
                <div className="my-4">
                    <p>{article.content}</p>
                </div>
                </>
            )

        }
   </div>
   </>
  )
}

export default Detailed;