import React from 'react';
import Item from './Item';

class ShoppingList extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props);
        return (
            <div className="shopping-list">
                {

                }
                <button className="clear-btn">
                    Clear Purchased
                </button>
            </div>
        );
    }
}

export default ShoppingList;