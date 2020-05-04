import React, { Component } from 'react'
import { connect } from 'react-redux'

class Button extends Component {
      constructor(props) {
            super(props)
            this.state = {
                  interval: null
            }
      }

      time_reducer = () => {
            this.props.run()
            this.setState({
                  interval: setInterval(() => {
                        this.set_num(this.props.number)
                  }, 1000)
            })
      }

      time_stop = () => {
            clearInterval(this.state.interval)
            this.setState({ interval: null })
            this.props.stop()
      }

      reset_time = () => {
            this.props.stop()
            this.props.reset()
      }

      componentDidUpdate(prevProps, prevState) {
            if (prevProps.number === 1 && prevProps.status === true) {
                  this.time_stop()
            }
      }

      set_num = (str) => {
            this.props.reducer(str)
      }

      render() {
            return (
                  <div>
                        {
                              this.props.number > 0 &&
                              (this.props.status === false ?
                                    <input type="button" style={{ background: "blue" }} value="run" onClick={this.time_reducer} />
                                    :
                                    <input type="button" style={{ background: "red" }} value="stop" onClick={this.time_stop} />
                              )
                        }
                        {
                              this.props.number <= 0 &&
                              (this.props.status === false ?
                                    <input type="button" style={{ background: "green" }} value="reset" onClick={this.reset_time} />
                                    :
                                    false
                              )
                        }
                  </div>
            )
      }
}

const mapStateToProps = (state) => {
      return {
            status: state.Status,
            number: state.Number.number
      }
}

const mapDispatchToProps = (dispatch) => {
      return {
            run: () => dispatch({
                  type: "RUN"
            }),
            stop: () => dispatch({
                  type: "STOP"
            }),
            reducer: (num) => dispatch({
                  type: "REDUCE",
                  payload: num - 1
            }),
            reset: () => dispatch({
                  type: "RESET"
            })
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(Button);
