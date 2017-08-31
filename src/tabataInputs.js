import React, { Component } from 'react';

class TabataInputs extends Component {
    startClick (e) {
        e.preventDefault();
        var tabataInputs = {
            sets: this.refs.sets.value,
            interval: this.refs.interval.value,
            restPeriod: this.refs.restPeriod.value

        }
        
        if(tabataInputs.sets > 0){
            this.props.onStart(tabataInputs);
        }
    }
    render() {
      return (
        <div className="container-inputs">
            <div>
                <div className="content-inputs">
                    <label htmlFor="sets">Sets:</label>
                    <input type="number" name="sets" ref="sets" min="1" max="5"/>

                </div>
                <div className="content-inputs">
                    <label htmlFor="interval">Interval (seconds):</label>
                    <input type="number" name="interval" ref="interval" min="5" max="60"/>

                </div>
                <div className="content-inputs">
                    <label htmlFor="restPeriod">Rest Period (seconds):</label>
                    <input type="number" name="restPeriod" ref="restPeriod" min="5" max="60"/>

                </div>
                <div className="content-buttons">
                    <button className="button-start"onClick={this.startClick.bind(this)}>Start</button>
                    <button className="button-stop">Stop</button>
                </div>
            </div>    
        </div>    
      );
    }
  }
  
  export default TabataInputs;