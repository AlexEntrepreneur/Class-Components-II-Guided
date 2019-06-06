import React from 'react';
import ShoppingList from './components/ShoppingList';
import Form from './components/Form';
import './styles.css';

const shopping = [
  {
    name: 'Test',
    purchased: false,
    id: 0
  },
  {
    name: 'Test 2',
    purchased: false,
    id: 1
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shopping,
      text: ''
    };
  }

  addItem = (event) => {
    event.preventDefault();
    console.log("item is added!");
  }

  markItemAsPurchased = () => {
    console.log("item was purchased");
  }

  clearPurchasedItems = () => {
    console.log("cleared purchased items!");
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
          <Form addFunction={this.addItem} />
        </div>
        <ShoppingList 
          shoppingList={this.state.shopping}
          markItemAsPurchasedFunction={this.markItemAsPurchased}
        />
      </div>
    );
  }
}

export default App;
