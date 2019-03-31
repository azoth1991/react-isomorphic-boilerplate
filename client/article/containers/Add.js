import React, {Component} from 'react'
import styles from '../sass/App'
import AritcleView from '../components/AritcleView'

class Add extends Component {
  constructor() {
    super()
  }

  render() {
    const {actions} = this.props

    return (
      <AritcleView></AritcleView>
    )
  }
}

export default Add
