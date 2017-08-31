import React, { Component } from 'react';

class TabataTimer extends Component {
    render() {
        var {sets, interval, restTimer} = this.props;
      return (
        <div className="container-tabata">
            <div className="tabata-count">
                <span>Set #</span>
                <span ref="set-count">{sets}</span>
            </div>
            <div className="tabata-count">
                <span>Interval Time Remaining</span>
                <span ref="intervalTime">{interval}</span>
            </div>
            <div className="tabata-count">
                <span>Rest Time Remaining</span>
                <span ref="restTime">{restTimer}</span>
            </div>
        </div>    
      );
    }
  }
  
  export default TabataTimer;