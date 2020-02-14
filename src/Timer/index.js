import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import '../Timer/style.css';
// import UIfx from 'uifx';
// import wavFile from '../Timer/firstBeep.wav';

// const beep = new UIfx({asset: firstbeep});


class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            rounds: props.rounds,
            seconds: props.seconds,
            minutes: props.minutes,
            rest: props.rest,
            counting: false,
            timerStarted: props.timerStarted
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        
        if (nextProps.rounds !== this.state.rounds) {
          this.setState({ rounds: nextProps.rounds });
        }
        if (nextProps.seconds !== this.state.seconds) {
          this.setState({ seconds: nextProps.seconds });
        }
        if (nextProps.minutes !== this.state.minutes) {
          this.setState({ minutes: nextProps.minutes });
        }
        if (nextProps.rest !== this.state.rest) {
            this.setState({ rest: nextProps.rest });
          }
        if (nextProps.timerStarted !== this.state.timerStarted) {
            this.setState({ timerStarted: nextProps.timerStarted });
          }
      }

      restTimer = () => {
          this.secondBeep();
          this.restCountdown = setInterval(() => {
            const rest = Number(this.state.rest);
            
            if(this.state.rounds > 0){
                console.log('first')
                this.setState({
                    counting: false,
                    rest: rest -1
                })
            } 
              if(this.state.rounds > 0 && this.state.rest === 0){
                
                  this.firstBeep();
                  console.log('second')
                  clearInterval(this.restCountdown);
                  this.setState({
                      rest: this.props.rest,
                      counting: true
                  });
                  
              } 
          }, 1000)
      }

      countdown = () => {
        this.myInterval = setInterval(()=> {
            const seconds = Number(this.state.seconds);
            const minutes = Number(this.state.minutes);
            const rounds = Number(this.state.rounds);
       
            if (seconds === 0 && minutes === 0 && this.state.counting === true){
                clearInterval(this.myInterval);
                if(rounds > 1){
                    this.restTimer();
                }
                
                this.setState(({rounds}) => ({
                    rounds: rounds - 1,
                    minutes: this.props.minutes,
                    seconds: this.props.seconds
                }))
                if(rounds > 1) {
                    this.countdown();
                } else{
                    // The timer is completely done at this point
                    this.secondBeep();
                    this.setState({
                                rounds: this.props.rounds,
                                minutes: this.props.minutes,
                                seconds: this.props.seconds,
                                rest: this.props.rest,
                                counting: false
                            })
                            return; 
                }
                
            } 
            
            else if (seconds === 0 && minutes > 0 && this.state.counting === true) {
                this.setState(({minutes}) => ({
                    minutes: minutes - 1,
                    seconds: 59
                }))
            }
            else if (seconds > 0 && this.state.counting === true){
                this.setState(({seconds}) => ({
                    counting: true,
                    seconds: seconds - 1
                }))
            } 
            
        }, 1000) 
    }
    
    firstBeep = () => {
        const audio = document.getElementById('firstBeep');
        audio.play();
    }

    secondBeep = () => {
        const audio = document.getElementById('secondBeep')
        audio.play();
    }

    start = () => {
        
        const stopButton = document.getElementById('stop');
        stopButton.textContent = 'Stop';
        if(this.state.seconds > 0 || this.state.minutes > 0){
            if(this.state.counting === false) {
                this.props.startTimer();
                this.setState({
                    counting: true
                })
                this.firstBeep();
                this.countdown()
            }
        }
    }

    stop = () => {
        const stopButton = document.getElementById('stop');
        stopButton.textContent = 'Reset';
        if(this.state.counting === true){
            clearInterval(this.myInterval);
            this.setState({
            counting: false
        })
            
        } else {
            this.props.resetTime()
            stopButton.textContent = 'Stop'
            this.setState({
                counting: false
            })
        }
                
    }

    render(){

        const timeStates = 
            <div id='countdown'>
                <p>Round: {this.state.rounds}</p>

                <div id='countdownStats'>
                    <p>{this.state.minutes} min</p>
                    <p>{this.state.seconds} sec</p>
                    
                </div>

                <p>Rest: {this.state.rest} sec</p>
                
            </div>
    
      
        return(
            <div id='container'>

                <audio id='firstBeep' src='/firstBeep.wav'></audio>
                <audio id='secondBeep' src='/secondBeep.wav'></audio>
                
                {timeStates}
                
                <div id="buttonGroup">
                    <Button className='timerButton' variant="primary" size="lg" onClick={this.start}>Start</Button>
                    <Button className='timerButton' variant="danger" size="lg" id='stop' onClick={this.stop}>Stop</Button>
                </div>
                
            </div>
        )
    }
}

export default Timer;