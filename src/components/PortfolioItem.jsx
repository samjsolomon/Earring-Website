import React from "react";

function PortfolioItem(props){
    return(
        
        <div className="col-md-4 col-sm-6 portfolio-item">

          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={props.img} alt=""/>
          </a>

          <div className="portfolio-caption">
            <h4>{props.title}</h4>
            <p className="text-muted">{props.content}</p>
          </div>
        </div>
      

    );
}

export default PortfolioItem;



