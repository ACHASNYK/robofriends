import React, {Component} from "react";
import Cardlist from "./Cardlist";
import Searchbox from "./Searchbox";
import { robots } from "./robots";

const State = {
    
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ""
        }
    }
    render() {
        return (
            <div className="tc">
                <h1>DimoBot</h1>
                <Searchbox />
                <Cardlist robots={robots} />
            </div>
        );
    }
}

export default App;

