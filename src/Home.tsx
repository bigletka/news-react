import {useEffect, useState} from "react";
import axios from "axios";
import Navbar from "./Navbar";

// Define the Login function.
export const Home = () => {
     const [news, setNews] = useState([]);

     const FetchData = async () => {
        try {
         console.log(localStorage.getItem('access_token'));
          const {data} = await axios.get(   
                         'http://localhost:8000/api/news/list', {
                          headers: {
                             'Authorization': `Token ${localStorage.getItem('access_token')}`,
                             'Content-Type': 'application/json',
                             
                          }}
                        );
         setNews(data);
         console.log(data);
         
         
         
       } catch (e) {
         console.log('not auth '+ e)
         window.location.href = '/login'
       }
    };

     useEffect(() => {
            FetchData(); 
          }, []);

     
     
     return <div className="">
       <Navbar></Navbar>
        <ul className="list-group">
            
            {news.map((news_item)=>{
                const {id, date, text} = news_item
                return <li key={id} >
                    <h5>{date}</h5>
                    <p>{text}</p>
                </li>
            })}
        </ul>
        </div>
}

export default Home;