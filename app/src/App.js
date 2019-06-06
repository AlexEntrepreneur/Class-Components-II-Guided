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
      formText: 'Kitten'
    };
  }

  addItem = (event) => {
    event.preventDefault();

    const newItem = {
      name: event.target.item.value,
      purchased: false,
      id: Date.now()
    }
    console.dir(newItem);

    this.setState({
      shopping: this.state.shopping.concat(newItem)
    });
  }

  markItemAsPurchased = (id) => {
    console.log(`item ${id} was purchased`);
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
          <Form addFunction={this.addItem} formText={this.state.formText} />
        </div>
        <ShoppingList 
          shoppingList={this.state.shopping}
          markItemAsPurchasedFunction={this.markItemAsPurchased}
          clearPurchasedFunction={this.clearPurchasedItems}
        />
      </div>
    );
  }
}

export default App;
