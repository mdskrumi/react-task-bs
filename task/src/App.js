import React from 'react';

import SelectProjectNum from './components/SelectProjectNum';
import ProjectDetail from './components/ProjectDetail';

import profilepic from "./images/profilepic.png"

import one from "./images/one.jpg"
import two from "./images/two.png"
import three from "./images/three.png"
import four from "./images/four.png"

import './App.css';
import Objective from './components/Objective';
import Detail from './components/Detail';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number : this.props.number || 4
        }
        this.onNumberSelect = this.onNumberSelect.bind(this);
    }
    onNumberSelect(num){
        console.log(num);
        this.setState({
             number : num 
        });
    }
    render(){
        if(this.state.number == 4){
            console.log("Rendering for 4");
            return(
                <div>
                    <div className="App">
                        <div className="header">
                            <img src={profilepic} className="profilepic" alt="logo" />
                            <div className="details">
                            <Detail name="Prosen Ghosh" />
                            <Detail name="Software Engineer"  />
                            <Detail name="Brain Station 23" />
                            </div>
                        </div>
                    </div>
                    <Objective text="HI i am a software engineer brain station 23. i have done some project. The projects are shown below." />
                    <SelectProjectNum onNumberSelect={this.onNumberSelect}/>
                        <div className="body">
                            <ProjectDetail name="My Project One" image={one} className="profilepic" />
                            <ProjectDetail name="My Project Two" image={two} className="profilepic" />
                            <ProjectDetail name="My Project Three" image={three} className="profilepic" />
                            <ProjectDetail name="My Project Four" image={four} className="profilepic" />
                        </div>
                </div>
            )
        }else{
            console.log("Rendering for 8");
            return(
                <div>
                    <div className="App">
                        <div className="header">
                            <img src={profilepic} className="profilepic" alt="logo" />
                            <div className="details">
                            <Detail name="Prosen Ghosh" />
                            <Detail name="Software Engineer"  />
                            <Detail name="Brain Station 23" />
                            </div>
                        </div>
                    </div>
                    <Objective text="HI i am a software engineer brain station 23. i have done some project. The projects are shown below." />
                    <SelectProjectNum onNumberSelect={this.onNumberSelect}/>
                        <div className="body">
                            <ProjectDetail name="My Project One" image={one} className="profilepic" />
                            <ProjectDetail name="My Project Two" image={two} className="profilepic" />
                            <ProjectDetail name="My Project Three" image={three} className="profilepic" />
                            <ProjectDetail name="My Project Four" image={four} className="profilepic" />
                        </div>
                        <br/>
                        <div className="body">
                            <ProjectDetail name="My Project One" image={one} className="profilepic" />
                            <ProjectDetail name="My Project Two" image={two} className="profilepic" />
                            <ProjectDetail name="My Project Three" image={three} className="profilepic" />
                            <ProjectDetail name="My Project Four" image={four} className="profilepic" />
                        </div>
                </div>
            )
        }
    }
}

export default App;



// 1.  use separation of concern
// 2. show project detils dynamically
// 3. make reusable component
