import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frames: 0,
      fps: 0,
      seconds: 0,
      minutes: 0,
      duration: 0
    };

    // this.minuteClick = this.minuteClick.bind(this);
    // this.secondClick = this.secondClick.bind(this);
    this.fpsClick = this.fpsClick.bind(this);
    this.durationClick = this.durationClick.bind(this);
  }
    // minuteClick(e) {     
    //   // get value from form input
    //   const value = parseInt(e.target.value)

    //   // take value and break it down to seconds and add left over seconds from duration minutes
    //   const computedDuration = (value * 60) + (this.state.duration%60);
    //   this.setState({duration: computedDuration});
    // }

    // secondClick(e) {
    //   // get value from input
    //   const newTotal = parseInt(e.target.value); 

    //   // get duration seconds and make minutes from them, then add left over seconds for a total duration
    //   const computedDuration = Math.floor(this.state.duration / 60) + newTotal
    //   this.setState({ duration: newTotal});
    // }
    durationClick(e) {
      // const value = e.target.value*this.state.fps;
      const value = e.target.value*this.state.fps;
      const valueString = String(Math.floor(value/60) + ":" + String(value%60));
      this.setState({ frames: value , duration: e.target.value });
    }
    

    fpsClick(e) {
      const value = this.state.duration*e.target.value;
      this.setState({ frames: value, fps: e.target.value });
    }

  render() {
    return (
      <form>
        <label>
          Frames Per Second
          <input
            name="fps"
            type="number"
            min={0}
            checked={this.state.fps}
            onChange={this.fpsClick} />
        </label>
        <br />
        <label>
          Duration: {Math.floor(this.state.duration/60) +":"+ this.state.duration%60}
          <input
            className='minutes'
            name="minutes"
            type="string"
            min={0}
            value={this.state.duration}
            onChange={this.durationClick} />
          {/* <input
            className='minutes'
            name="minutes"
            type="number"
            min={0}
            value={Math.floor(this.state.duration/60)}
            onChange={this.minuteClick} />
          <input
            className='minutes'
            name="seconds"
            type="number"
            min={0}
            value={this.state.duration%60}
            onChange={this.secondClick} /> */}
        </label>
        <br />
        <label>
          Frames: {this.state.frames}

        </label>
      </form>
    );
  }
}

export default App;
