import React from "react";
import portfolios from "../portfolios";
import PortfolioItem from "./PortfolioItem";


function createPortfolio(pItem){
  return( 
  <PortfolioItem
    key={pItem.key}
   title={pItem.title }
   img = {pItem.img}
   content={pItem.content}
   />

  )};

function Portfolio(){ 
    return(
<section className="bg-light page-section" id="portfolio">

    <div className="container">
      
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Products</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
      {portfolios.map(createPortfolio)}
    </div>

    </div>
  </section>
)}

export default Portfolio;