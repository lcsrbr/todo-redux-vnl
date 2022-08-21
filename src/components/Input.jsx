import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ListAction, InputAction } from '../components/redux/actions';

 class Input extends Component {

    handleChange = ({ target }) => {
        const { dispatch, list } = this.props;
        dispatch(InputAction({
          input: {value:target.value, id:list.length},
      }))}
      createList = () => {
          const {dispatch, list, input} = this.props
          dispatch(ListAction({
            list: [...list, input],
        }))
        dispatch(InputAction({
          input: {value:'', id: list.length},
        }))
      }

    render() {
        const { input, } = this.props;
        return (
            <div>
                <input type="text" placeholder='insert here' value={input.value} onChange={this.handleChange} />
                <button type='button' onClick={this.createList}>Insert Here</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.listReducer.list,
    input: state.listReducer.input
  })
  
  export default connect(mapStateToProps)(Input)