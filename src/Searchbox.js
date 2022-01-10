import React from "react";

const Searchbox = ({searchange}) => {
    return (
        <div>
            <input
                className = "pa3 ba b--grey bg-lightest-green"
                type="search"
                placeholder="Botosearch"
                onChange={searchange}
            />
        </div>
    );
}

export default Searchbox;