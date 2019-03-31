import React, {Component} from 'react'
import AritcleView from '../components/AritcleView'

class App extends Component {
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

export default App
