import React from 'react';

class App extends  React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0,
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this); 
  }

  render() {
    return (
      <div className='container'> 
        <div className={`temperature ${this.getColor()}`}>
          <div className='temperature__content'>{this.state.temperature}°C</div>
        </div>
        <button className='btn' id='btn-increment' onClick={this.increment}>+</button>
        <button className='btn' id='btn-decrement' onClick={this.decrement}>-</button>
      </div>
    );
  }

  getColor() {
    if (this.state.temperature < 0) {
      return 'cold';
    }
    else if (this.state.temperature >= 0 && this.state.temperature <= 20) {
      return 'neutral';
    }
    else if (this.state.temperature > 20) {
      return 'hot';
    }
  }
  
  increment() {
    this.setState({temperature: this.state.temperature + 1});
  }
  decrement() {
    if (this.state.temperature > -272) 
      this.setState({temperature: this.state.temperature - 1});
  }
}


export default App;
