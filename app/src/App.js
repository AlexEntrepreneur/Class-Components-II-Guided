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
      formText: ''
    };
  }

  addItem = (event) => {
    event.preventDefault();

    const newItem = {
      name: event.target.item.value,
      purchased: false,
      id: Date.now()
    }

    this.setState({
      shopping: this.state.shopping.concat(newItem)
    });
  }

  markItemAsPurchased = (id) => {
    this.setState((previousState) => {
      return {
        shopping: this.state.shopping.map(item => {
          // We are mapping through the this.state.shopping array
          if (item.id === id) {
            // If the id of the item we clicked on is equal to the
            // current "item" id (that we are mapping through), then change something
            return {
              ...item,
              // We are toggling the "purchased" property from true to false/false to true
              purchased: !item.purchased
            }
          } else {
            // Or else leave the current item unchanged
            return item;
          }
        })
      }
    });
  }

  clearPurchasedItems = () => {
    this.setState({
      shopping: this.state.shopping.filter(item => item.purchased === false)
    });
  }

  onFormChange = (event) => {
    this.setState({
      formText: event.target.value
    });
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
          <Form 
            addFunction={this.addItem} 
            formText={this.state.formText}
            onFormChangeFunction={this.onFormChange}
          />
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
