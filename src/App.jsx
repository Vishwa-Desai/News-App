import './App.css';
import {useState,useEffect} from "react";
import axios from "axios";
import apikey from "./Data/config";

import Topbar from "./components/topbar/Topbar";
import Feedcontainer from "./components/feed_container/Feedcontainer";
import Footer from "./components/footer/Footer";


function App() {
  const [category,setCategory]=useState("general");
  const [newsArray,setNewsArray]=useState([]);
  const [newsResults,setNewsResults]=useState();
  const [loadMore,setLoadMore]=useState(5);
  
  //to call newsApi function , we should use useEffect
  //this will only call when categories are changed or totalresults are changed.
  useEffect(()=>{
    const newsApi=async ()=>{
      try{
        //const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const news=await axios(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadMore}`,
        );
        setNewsArray(news.data.articles);
        setNewsResults(news.data.totalResults);
        //console.log(news.data);
      }
      catch(error)
      {
        console.log(error);
      }
    };
    
  
    newsApi();

  },[category,loadMore]);

  return (
          <div className="{darkMode?'dark-mode:'light-mode">
             <Topbar setCategory={setCategory}/> 
            <div className="homeContainer">
              <Feedcontainer newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore} />
            </div>   
            <Footer />
         </div>
  ); 
}

export default App;
