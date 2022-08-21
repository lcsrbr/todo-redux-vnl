import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ListAction } from '../components/redux/actions';

class List extends Component {

    removeFromList = (param) => {
        const { list, dispatch } = this.props;
        const filteredList = list.filter((item) => item.id !== param.id)
        dispatch(ListAction({
            list: filteredList,
        }))
    };

    render() {
        const { list } = this.props;
        return (
            <div>
                {list && list.map((item) => {
                    return (
                        <div key={item.id}>
                            <span>{item.value}</span>
                            <button
                                type='button'
                                onClick={() => this.removeFromList(item)}>
                                remove item
                            </button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.listReducer.list,
    input: state.listReducer.input
})

export default connect(mapStateToProps)(List)