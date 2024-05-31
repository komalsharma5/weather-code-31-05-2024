import React, { Component } from 'react'
import PacmanLoader from 'react-spinners/PacmanLoader'

export class Loader extends Component {
  render() {
    console.log(this.props.wetherData)
    
    return (
      <div>
        <PacmanLoader
        color="rgba(54, 102, 214, 1)"
        margin={3}
        size={30}
        />
      </div>
    )
  }
}

export default Loader
