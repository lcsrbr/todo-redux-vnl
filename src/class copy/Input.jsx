import React, { Component } from 'react'

export default class Input extends Component {



    render() {
        const { input, list, createList, handleChange } = this.props;
        return (
            <div>
                <input type="text" placeholder='insert here' value={input.value} onChange={handleChange} />
                <button type='button' onClick={createList}>Insert Here</button>
            </div>
        )
    }
}
