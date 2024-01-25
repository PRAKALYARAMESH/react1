import "../classcomponents/statecomponent.css"
import React from "react";
class StateComponent extends React.Component{
    constructor(){
        super()
        this.state={

            name:"PRAKALYARAMESH",
            exp:"SUVETHA"
            
        }
    }
    changeState = () => {
        console.log("Kongu Engineering College")
    }
    render(){
        return(
            <div>
                
               <h1> THIS IS A STATE COMPONENT</h1>
               <h2>{this.state.name} SREE{this.state.exp}</h2>
               <h3> I am changing the state of the{this.state.name}to{this.changeState()}</h3>
               <h4><button>Click me to change the state</button></h4>
            </div>
            

        )
    
        
            

        }
    }
export default StateComponent;