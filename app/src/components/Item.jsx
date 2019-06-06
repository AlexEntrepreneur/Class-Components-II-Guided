import React from 'react';

class Item extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div
                className="item"
            >
                <p>{ this.props.itemData.name }</p>
            </div>
        );
    }
}

export default Item;