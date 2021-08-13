import React from 'react'


import "./feed.css";


export default function Feed({newsItem}) {
    //console.log(newsItem);
    
    const fulldate=new Date(newsItem.publishedAt);
    var date=fulldate.toString().split(" ");
    const hour=parseInt(date[4].substring(0,2));
    const time=hour>12?true:false;
    return (
            <div className="feed">
                <div className="container1">
                    <div className="top">
                        <div className="news-img"> <img src={newsItem.urlToImage?newsItem.urlToImage:"http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"} alt={newsItem.title} align="left" className="profileImg" />
                        </div>
                       <div className="newsText">
                           <div className="upperPart">
                                <span className="newsTitle">{newsItem.title}</span> <br />
                                <span className="author">
                                    <a href={newsItem.url} tarhet="__blank">
                                    </a>
                                    <b>short</b> {" "}
                                    <span className="muted">
                                    by {newsItem.author?newsItem.author:"unknown"} /{" "}
                                     {
                                        time?`${hour-12}:${date[4].substring(3,5)} pm`:`${hour}:${date[4].substring(3,5)} am`} {" "}
                                        on {date[2]} {date[1]} {date[3]}, {date[0]}
                                    
                                    </span>
                                </span>
                           </div><br /> 
                           <div className="lowerPart">
                               <div className="desc">
                                   {newsItem.description}
                               </div>
                               <span className="readMore">
                                   read more at {" "}
                                   <a href={newsItem.url} tarhet="__blank" className="link">
                                   <b> {newsItem.source.name}</b>
                                   </a>
                               </span>
                           </div> 
                        </div>     
                    </div>
                    
                </div>
            </div>
    )
}
