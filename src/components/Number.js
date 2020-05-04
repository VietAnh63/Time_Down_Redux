import React, { Component } from 'react'
import {connect} from 'react-redux'
class Number extends Component {

      setNum = (e) => {
            e.preventDefault()
            let val = e.target.value
            let name = e.target.name
            this.props.setting({[name]:val})
      }

      render() {
            return (
                  <div>
                        <input type="text" name="number" onChange={(e)=>this.setNum(e)}/>
                        <h1>{this.props.number}</h1>
                  </div>
            )
      }
}

const mapStateToProps = (state) => {
	return {
		number: state.Number.number,
	}
}

const mapDispatchToProps = (dispatch) => {
      return {
            setting: (name) => dispatch({
                  type: "SETTING",
                  payload: name.number
            })
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Number);

