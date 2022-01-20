import React from "react";
// import "./Card.css";

const Card = (props) => {
    return (
        
        <div id="card" className=" tc bg-white dib br3 pa3 ma2 bg-animate hover-bg-white grow bw2 shadow-5">
            
            <img alt="hui" src={`https://robohash.org/${props.name + props.username}?200x200`}/>
            <div>
                <h2>{props.name} {props.username}</h2>
                <p>{props.slogan}</p>
            </div>
        </div>
    );
}

export default Card;