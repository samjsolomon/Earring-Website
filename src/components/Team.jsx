import React from "react";
import TeamMember from "./TeamMember";
import teamMembers from "../teamMembers";

function createMember(member){
  return( 
  <TeamMember
    key={member.key}
   name={member.name }
   img = {member.img}
   title={member.title}
   />

  )};
  
function Team(){
    return(
  
        <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>


          <div className="row">
            {teamMembers.map(createMember)}
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
            </div>
          </div>
        </div>
      </section>
  
    )
}

export default Team;