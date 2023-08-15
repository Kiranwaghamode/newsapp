import React from 'react'

const NewsItem= (props) => {

 

    return (
    <>
        <span className="badge rounded-pill text-bg-danger">{props.name}</span>
        <div className="container">
        <div className="card mx-3" style={{width: "18rem"}}>
            <img src={!props.imgUrl?"https://www.livemint.com/lm-img/img/2023/05/22/600x338/3-0-86449917-iStock-1167137273-0_1679792587527_1684728339099.jpg": props.imgUrl} alt='error'/>
            <div className="card-body mx-3 ">
                <h5 className="card-title">{props.title?props.title:"Unknown"}...</h5>
                <p className="card-text">{props.description}...</p>
                <p className="card-text"><small className="text-body-secondary">  By {!props.author?"Unknown":props.author} updated {new Date(props.date).toDateString()}</small></p>

                <a href={props.url} target='_blank' className="btn btn-dark" rel='noreferrer'>Read More</a>
            </div>
        </div>
        </div>


      </>
    )
  
}


export default NewsItem;