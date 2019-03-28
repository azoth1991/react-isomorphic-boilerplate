import React, {Component} from 'react'
import SectionMain from '../components/SectionMain'
import styles from '../sass/App'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        const {actions} = this.props

        return (
            <div className={styles.app}>
                <div className={styles.login}>
                    <div className="username">用户名: <input type="text"/></div>
                    <div className="password">密码: <input type="password"/></div>
                </div>
            </div>
        )
    }
}

export default App
