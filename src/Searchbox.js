import React from "react";
// import { useState } from 'react';
// import {Change} from "./App";
// import { robots } from "./robots";

const Searchbox = ({Change}) => { 
    return (
        <div>
            <input
                className="pa3 ba b--grey bg-lightest-purple"
                type="search"
                
                placeholder="Find DmyLeBot"
                onChange={Change}
             />
         </div>
     );
 }

// const Searchbox = ({ employees }) => {
//   const [query, setQuery] = useState('');
  
//   const onChange = event => setQuery(event.target.value);
//   const filteredEmployees = employees.filter(name => {
//     return name.toLowerCase().includes(query.toLowerCase());
//   });
//   return (
//     <div>
//       <h2>Employees List</h2>
//       <input 
//         type="text" 
//         value={query} 
//         onChange={onChange}
//       />
//       <div className="list">
//         {filteredEmployees.map(name => <div>{name}</div>)}
//       </div>
//     </div>
//   );
// }

export default Searchbox;