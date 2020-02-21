import React from "react";

function TeamMember(props){
    return(
        
        <div className="col-sm-4">
        <div className="team-member">
          <img className="mx-auto rounded-circle" src={props.img} alt=""/>
          <h4>{props.name}</h4>
          <p className="text-muted">{props.title}</p>
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      

    );
}

export default TeamMember;