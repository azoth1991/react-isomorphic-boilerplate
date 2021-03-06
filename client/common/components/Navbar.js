import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'
import styles from '../sass/Navbar'

class Navbar extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <nav className={styles.navbar}>
        <h2>AZOTH's blog</h2>
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

export default Navbar
