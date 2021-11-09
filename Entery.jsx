import React from "react";

function Entery(props) {
    return(
        <div className="tern">
  <dt>
    <span className="emoji" role="img" aria-label="Tense Biceps">
    {props.emoji}
    </span><br></br>
    <span>{props.name}</span>
  </dt>
  <dd>
   {props.description}
  </dd>
  </div>
    );



}

export default Entery