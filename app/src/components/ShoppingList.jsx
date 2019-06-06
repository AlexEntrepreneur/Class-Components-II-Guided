import React from 'react';
import Item from './Item';

class ShoppingList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="shopping-list">
                {
                    this.props.shoppingList.map(item => {
                       return <Item 
                        key={item.id} 
                        itemData={item} 
                        markPurchasedFunction={this.props.markItemAsPurchasedFunction}
                        /> 
                    })
                }
                <button className="clear-btn">
                    Clear Purchased
                </button>
            </div>
        );
    }
}

export default ShoppingList;