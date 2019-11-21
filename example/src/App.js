import React, { Component } from 'react'

import ColorComponent from 'test-khaadi-v0.1'

export default class App extends Component {
  render () {
    return (
      <div>
        <ColorComponent text='Modern React component module' color= {'red'}>
          <h6>this is the children</h6>
        </ColorComponent>
      </div>
    )
  }
}
