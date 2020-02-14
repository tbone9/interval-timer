import React, {Component} from 'react';
import Timer from '../Timer';
import Inputs from '../Inputs';
import '../MainContainer/style.css';

class MainContainer extends Component {
    state = {
        rounds: 1,
        seconds: 0,
        minutes: 0,
        rest: 0,
        timerStarted: false
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    resetTime = () => {
        this.setState({
            rounds: 1,
            seconds: 0,
            minutes: 0,
            rest: 0,
            timerStarted: false
        })
    }

    startTimer = () => {
        this.setState({
            timerStarted: true
        })
    }

    render(){
        
    
        return(
            <div id={this.state.timerStarted ? 'container' : ''}>
                {this.state.timerStarted ? '' : 
                <Inputs handleChange={this.handleChange} rounds={this.state.rounds} seconds={this.state.seconds} minutes={this.state.minutes} rest={this.state.rest} />}
                
                <Timer id='timer' startTimer={this.startTimer} resetTime={this.resetTime} rounds={this.state.rounds} seconds={this.state.seconds} minutes={this.state.minutes} rest={this.state.rest} timerStarted={this.state.timerStarted}/>
            </div>
        )
    }
}

export default MainContainer;