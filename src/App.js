import React, {useState} from "react";
import Cardlist from "./Cardlist";
import Container from "./Container";
import Searchbox from "./Searchbox";
import { robots } from "./robots";
import Scroll from "./Scroll";
import Create from "./Create";
import "./App.css";
import "./Create.css";
import Modal from "./Modal";
import "./Modal.css"



const App =() =>  {
    // constructor() {
        // super()
        // this.state = {
    const [robot, setRobots] = useState(robots)
    const [searchfield, onSearchChange] = useState("")
    const [show, setState] = useState(false)
        
    

    // componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/users").then(response => {
    //         return response.json();
    //     }).then(users => {
    //         this.setState({ robots: users})
    //     })
        
     
    onSearchChange=(event)=> {
        // console.log(event.target.value);
        // this.setState({ searchfield: event.target.value})
        (searchfield = event.target.value)
        // const filtredBots = this.state.robots.filter(robots => {
        // return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // })
        // console.log(filtredBots);
    }
// render() {
        const filtredBots = this.state.robots.filter(robots => {
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    return (
        <div className="tc">
        <h1 className="f1">Dmy`LeBot</h1>
            
            <Searchbox searchange={onSearchChange} />
            <button onClick={()=> setState( show = true)}>Створити нового DmyLeBota</button>
            <Modal show = { show }/>
            
               
                    
            <Scroll>
                    <Cardlist robots={filtredBots} />
            </Scroll>
        </div>
        );
    // }
}

export default App;

