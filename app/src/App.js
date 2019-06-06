import React from 'react';
import ShoppingList from './components/ShoppingList';
import './styles.css';

const shopping = 'Test';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shopping
    };
  }
  
  testBinding() {
    // We have to explicitly provide the value of this or
    // We can use arrow functions to automatically pass on the value of this
    console.log("function fired!", this);
  }

  render() {
    console.log(this.state.shopping)
    return (
      <div className="App">
        <div className="header">
          <h1 onClick={this.testBinding.bind({ lemon: true })}>Shopping List</h1>
        </div>
        <ShoppingList />
      </div>
    );
  }
}

export default App;
