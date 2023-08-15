import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
// import Loading from "./Loading";
import propTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  // static defaultProps = {
  //   country: 'in',
  //   category: 'general'
  // }

  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);

  const updateNews = async () => {
    props.setprogress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=482fd40f032a45e3879400abd7b05709&page=${page}&pagesize=21`;

    setloading(true);
    props.setprogress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setprogress(50);
    setloading(false);

    console.log(parsedData);

    setarticles(parsedData.articles);
    

    props.setprogress(100);
  };

  useEffect(() => {
    updateNews();
    //eslint-disable-next-line
  }, []);


  const compareByPublishedDate = (a, b) => {
    const dateA = new Date(a.published);
    const dateB = new Date(b.published);
    return dateB - dateA; // Descending order
  };

  // Sort the news array using the custom comparator
  const sortedNews = [...articles].sort(compareByPublishedDate);
  

  // const fetchMoreData = async () => {
  //   setloading(true);
    
  //   const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=482fd40f032a45e3879400abd7b05709&page=${page+1}&pagesize=21`;
  //   setpage(page + 1);

  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   setloading(false);

  //   console.log(parsedData);

  //   setarticles(articles.concat(parsedData.articles));
  //   settotalResults(parsedData.totalResults);
  // };

  return (
    <>
      <div className="row container ">
        <h1 className="container" style={{marginTop:"70px"}}>
          News Monkey- Top {props.category} headlines 
        </h1>
        {/* {this.state.loading && <Loading />} */}
        {/* <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading && <Loading />}
        ></InfiniteScroll> */}

        {sortedNews.map((element) => {
          return (
            <div className="col-md-4 " key={element.url}>
              <NewsItem
                title={element.title?element.title:'unknown'}
                description={element.description}
                imgUrl={element.urlToImage}
                url={element.url}
                author={element.author}
                date={element.publishedAt}
                name={element.source.name}
              />
            </div>
          );
        })}

        {/* <div className="col-md-4 ">
            <NewsItem title='Chennai super kings' description='Who next captain of csk'/>            
            </div>
            <div className="col-md-4 ">
            <NewsItem title='Politics' description='New cheif minister of karnatak' imgUrl="https://media.cnn.com/api/v1/images/stellar/prod/230520212408-01-armed-phoenix-high-school-student-arrested.jpg?c=16x9&q=w_800,c_fill"/>            
            </div> */}
      </div>
    </>
  );
};

News.propTypes = {
  country: propTypes.string,
  category: propTypes.string,
};

export default News;
