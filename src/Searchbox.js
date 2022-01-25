import React from "react";

const Searchbox = ({searchange}) => {
    return (
        <div>
            <input
                // className = "pa3 ba b--grey bg-lightest-purple"
                type="search"
                value=
                placeholder="Find DmyLeBot"
                onChange={searchange}
            />
        </div>
    );
}

export default Searchbox;