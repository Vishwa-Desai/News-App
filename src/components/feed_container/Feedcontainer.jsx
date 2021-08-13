import React from 'react'
import "./feed_container.css"
import Feed from "../feed/Feed"
const Feedcontainer = ({  newsArray, loadMore, setLoadMore, newsResults }) => {
    //     console.log('hii');
    //     console.log(newsArray);
    return (
        <div className="container">
            {
                newsArray.map((newsItem) => (
                    <Feed newsItem={newsItem} key={newsItem.title} />
                ))
            }
            {loadMore <= newsResults && (
                <>
                
                 <button className="loadmore" onClick={() => setLoadMore(loadMore=>loadMore+5)}>
                        Load More
                    </button>
                </>
            )}

        </div>
    );
}

export default Feedcontainer
