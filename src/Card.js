import React from "react";
import "./Card.css";

const Card = (props) => {
    return (
        
        <div className="card">
                       
            <img id="rob" alt="hui" src={`https://robohash.org/${props.name + props.username}`}/>
            
            <h2>{props.name} {props.username}</h2>
            <p>{props.slogan}</p>
            
        </div>
    );
}

export default Card;