import React from 'react';
import './styles.css';

const shopping = '';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shopping
    };
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
        </div>
      </div>
    );
  }
}

export default App;
