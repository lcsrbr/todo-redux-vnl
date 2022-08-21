import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const { list, removeFromList } = this.props;

        return (
            <div>
                {list.length > 0 && list.map((item) => {
                    return (
                        <div key={item.id}>
                            <span>{item.value}</span>
                            <button type='button' onClick={() => removeFromList(item)}>remove item </button>
                        </div>
                    )
                })}
            </div>
        )
    }
}
