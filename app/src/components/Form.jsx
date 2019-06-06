import React from 'react'

class Form extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <form>
                <input 
                    type="text"
                    // value={}
                    name="item"
                    onChange={() => console.log('form working')}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default Form;