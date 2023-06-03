import React from 'react';

class App extends  React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0,
    } 
  }

  render() {
    return (
      <div className='container'> 
        <div className='temperature'>
          <div className='temperature__content'>{this.state.temperature}°C</div>
        </div>
        <button className='btn' id='btn-increment'>+</button>
        <button className='btn' id='btn-decrement'>-</button>
      </div>
    );
  }
}


export default App;
