import { Component } from "react";
import "./index.css";
class CounterApp extends Component {
    state={count:0};

    onIncrease=()=>{
        this.setState((laststate=>({count:laststate.count+1})))
    }
    onDecrease=()=>{
        this.setState((laststate=>({count:laststate.count-1})))
    }
    render() {
        const {count} = this.state; 
        return (
            <div className="app-container">
                <div className="content-container">
                    <h1 className="heading">Order crocodiles🐊 from Burkina Faso</h1>
                    <h3 className="under-heading">How many crocodiles ??</h3>
                    <h1 className="counter">{count}</h1>
                    <div>
                        <button className="increase-button" type="button" onClick={this.onIncrease}>Increase</button>
                        <button className="decrease-button" type="button" onClick={this.onDecrease}>Decrease</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CounterApp;