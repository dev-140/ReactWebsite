import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "hello"
      }
    }

    // clickHandler = this.clickHandler.bind(this)

    // clickHandler() {
    //     this.setState({
    //         message: "hello world"
    //     })
    // }

    clickHandler = () => {
        this.setState({
            message: "hello world"
        })
    }

  render() {
    return(
        <div>
            <span>{this.state.message}</span>
            <br></br>
            {/* <button onClick={this.clickHandler.bind(this)}>click</button>  */} 
            {/* <button onClick={() => this.clickHandler()}>click</button> */}
            <button onClick={this.clickHandler}>click</button>
        </div>
    );
  }
}

export default EventBind;
