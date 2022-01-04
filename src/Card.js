import React from "react";

const Card = (props) => {
    return (
        
        <div className = "bg-light-green dib br3 pa3 ma2 bg-animate hover-bg-white black grow bw2 shadow-5">
            <img alt = "hui" src="https://robohash.org/ДмитроВалентинович?200x200" />
            <div>
                <h2>{ props.name}}</h2>
                <p>{props.slogan}</p>
            </div>
        </div>
    );
}

export default Card;