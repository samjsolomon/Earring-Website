import React from "react";

function About(){
    return(
  
        <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">About</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 ">
                <p className= "about-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend vitae massa sed viverra. Donec ultrices libero suscipit, scelerisque lacus sit amet, fringilla erat. In non efficitur magna. In placerat, enim eget venenatis vulputate, nisl ipsum malesuada turpis, scelerisque sollicitudin nibh ipsum sed tellus. Vestibulum tristique iaculis turpis nec pharetra. Proin vitae posuere tortor. Aliquam vel porta leo. Nam non convallis ante, eu ultricies lectus. Curabitur ultrices, velit quis fermentum tempor, urna mi aliquet ligula, ut sollicitudin dolor lorem eget elit.</p>
             </div>
             <div className="col-md-4 col-sm-6 "></div>
                <img className="about-img" src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/85166948_3154875777856653_7773222650582663168_n.jpg?_nc_cat=108&_nc_ohc=Rbh5SEai7tUAX-oXPGf&_nc_ht=scontent-atl3-1.xx&oh=000c314054d513b41c4a5a9daee9f66b&oe=5EBC54EF" alt=""/>
             </div>
          </div>
       
      </section>
  
    )
}

export default About;