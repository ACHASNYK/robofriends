import React, {Component} from "react";
import Cardlist from "./Cardlist";
import Searchbox from "./Searchbox";
import { robots } from "./robots";
import "./App.css";



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ""
        }
    }
    onSearchChange=(event)=> {
        // console.log(event.target.value);
        this.setState({ searchfield: event.target.value})
        // const filtredBots = this.state.robots.filter(robots => {
            // return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // })
        // console.log(filtredBots);
    }
    render() {
        const filtredBots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1 className="f2">Dmy`LeBot</h1>
                <Searchbox searchange={this.onSearchChange}/>
                <Cardlist robots={filtredBots} />
            </div>
        );
    }
}

export default App;

