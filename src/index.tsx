/**
 * @class ColorComponent
 */

import * as React from 'react'

export type Props = { text: string, color: string, children: any }

export default class ColorComponent extends React.Component<Props> {
  render() {
    const {
      text, color
    } = this.props

    return (
      <h1 style={{color}}>
        {text} in {color} 
        {this.props.children}
      </h1>
    )
  }
}
