import React, {Component} from 'react';
import '../Inputs/style.css';

class Inputs extends Component {
    state = {
        rounds: this.props.rounds,
        seconds: this.props.seconds,
        minutes: this.props.minutes,
        rest: this.props.rest
    }

    render(){
        return(
            <div>
                    <div className="inputGroupContainer">
                        <div className="inputGroup">
                            <span className="inputLabel">Rounds</span>
                            <input className='slider' id='roundSlider' type="range" min='1' max='10' value={this.props.rounds} name="rounds" onChange={this.props.handleChange}></input>
                        </div>
                        <div className="inputGroup">
                            <span className="inputLabel">Minutes</span>
                            <input className='slider' id='minuteSlider' min='0' max='60' value={this.props.minutes} type="range" name="minutes" onChange={this.props.handleChange}></input>
                        </div>
                        <div className="inputGroup">
                            <span className="inputLabel">Seconds</span>
                            <input className='slider' id='secondSlider' min='0' max='60' value={this.props.seconds} type="range" name="seconds" onChange={this.props.handleChange}></input>
                        </div>
                        <div className="inputGroup">
                            <span className="inputLabel">Rest (seconds)</span>
                            <input className='slider' id='secondSlider' min='0' max='60' value={this.props.rest} type="range" name="rest" onChange={this.props.handleChange}></input>
                        </div>
                    </div>
                    
                </div>
        )
    }
}

export default Inputs;