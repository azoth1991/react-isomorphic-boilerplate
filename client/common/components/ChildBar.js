import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'
import styles from '../sass/ChildBar'

class ChildBar extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <nav className={styles.childBar}>
        <div className="navbar-list">
          <IndexLink className={styles.link} activeClassName={styles.active} to="/">主页</IndexLink>
          <Link className={styles.link} activeClassName={styles.active} to="/explore">归档</Link>
          <Link className={styles.link} activeClassName={styles.active} to="/about">关于</Link>
          <Link className={styles.link} activeClassName={styles.active} to="/tag">标签</Link>
        </div>
      </nav>
    )
  }
}

export default ChildBar
