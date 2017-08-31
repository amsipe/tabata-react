import React, { Component } from 'react';
import TabataInputs from './tabataInputs.js';
import TabataTimer from './tabataTimer.js'

class Tabata extends Component {
    constructor(props){
        super(props);
        this.state = {
            sets: 3,
            interval: 10,
            restTimer: 20,
            intervalTimer: null,
            restInterval: null,
            initialSets: null,
            initialInterval: null,
            initialrestTimer: null
        };
    };

    handleStart (inputs) {
        var that = this;
        console.log(inputs);
        this.setState({
            sets: inputs.sets,
            interval: inputs.interval,
            restTimer: inputs.restPeriod,
            initialSets: inputs.sets,
            initialInterval: inputs.interval,
            initialRestTimer: inputs.restPeriod,

        });
        this.intervalStart();

    }
    intervalStart () {

        this.state.intervalTimer = setInterval(this.intervalDown.bind(this),1000);

    }
    intervalDown () {
        var intervalTick = this.state.interval;
        if(this.state.interval > 0){
            // this.state.interval--;

            
            intervalTick--;
            this.setState({
                interval: intervalTick
            })
        }else {
            clearInterval(this.state.intervalTimer)
            this.restStart();
        }
    }
    restStart () {
        this.state.restInterval = setInterval(this.restDown.bind(this),1000);
    }
    restDown () {
        var restTick = this.state.restTimer;
        var setTick = this.state.sets
        if(restTick > 0){
            // this.state.restTimer--;
            restTick--;
            this.setState({
                restTimer: restTick
            })
        }else if (setTick > 0){
            console.log(this);
            setTick--;
            this.setState({
                sets: setTick,
                interval: this.state.initialInterval,
                restTimer: this.state.initialRestTimer
            })
            clearInterval(this.state.restInterval);
            this.intervalStart();
        }else {
            clearInterval(this.state.restinterval);
        }
    }
    render() {
        console.log(this);
        var {sets, interval, restTimer} = this.state;
      return (
        <div>
            <div className="wrapper">
                <TabataInputs  onStart={this.handleStart.bind(this)} />
                <TabataTimer sets={sets} interval={interval} restTimer={restTimer}/>
            </div>
        </div>
      );
    }
  }
  
  export default Tabata;