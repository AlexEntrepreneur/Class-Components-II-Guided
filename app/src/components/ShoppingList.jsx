import React from 'react';

class ShoppingList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="shopping-list">
                ShoppingList
                <button className="clear-btn">
                    Clear Purchased
                </button>
            </div>
        );
    }
}

export default ShoppingList;