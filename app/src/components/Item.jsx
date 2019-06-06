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
                <p>Test Text</p>
            </div>
        );
    }
}

export default Item;