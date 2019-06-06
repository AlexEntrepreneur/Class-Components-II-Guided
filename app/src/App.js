import React from 'react';
import ShoppingList from './components/ShoppingList';
import Form from './components/Form';
import './styles.css';

const shopping = [
  {
    name: 'Test',
    purchased: false,
    id: 0
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shopping,
      text: ''
    };
  }
  
  testBinding() {
    // We have to explicitly provide the value of this or
    // We can use arrow functions to automatically pass on the value of this
    console.log("function fired!", this);
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 onClick={this.testBinding.bind({ lemon: true })}>Shopping List</h1>
          <Form />
        </div>
        <ShoppingList 
          shopping={this.state.shopping}
        />
      </div>
    );
  }
}

export default App;
