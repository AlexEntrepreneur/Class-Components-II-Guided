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
                    value={this.props.formText}
                    name="item"
                    onChange={this.props.onFormChangeFunction}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default Form;