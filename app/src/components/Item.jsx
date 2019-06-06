import React from 'react';

class Item extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div
                className={`item ${this.props.itemData.purchased === true ? 'purchased' : ''}`}
                onClick={() => this.props.markPurchasedFunction(this.props.itemData.id)}
            >
                <p>{ this.props.itemData.name }</p>
            </div>
        );
    }
}

export default Item;