import React from 'react'
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Footer from "../../components/footer/Footer";

import "./home.css";

const Home=({setCategory})=>{
    console.log('home:${setCategory} ');
    return(
        <>
             <Topbar setCategory={setCategory}/> 
            <div className="homeContainer">
                 <Feed /> 
            </div>   
            <Footer /> 
        </>
    );
}
export default Home;