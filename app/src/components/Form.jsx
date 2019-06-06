import React from 'react'

class Form extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <form onSubmit={this.props.addFunction}>
                <input 
                    type="text"
                    // value={}
                    name="item"
                    onChange={() => {}}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default Form;