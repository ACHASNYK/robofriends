import React from "react";

const Card = (props) => {
    return (
        
        <div className = " tc bg-white dib br3 pa3 ma2 bg-animate hover-bg-light-green black grow bw2 shadow-5">
            <img alt="hui" src={`https://robohash.org/${props.name + props.username}?200x200`}/>
            <div>
                <h2>{props.name} {props.username}</h2>
                <p>{props.slogan}</p>
            </div>
        </div>
    );
}

export default Card;