import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'
import styles from '../sass/ChildBar'

class ChildBar extends Component {
  constructor() {
    super()
  }

  render() {
    const { tag = [] } = this.props;
    return (
      <nav className={styles.childBar}>
        <div className="navbar-list">
          {tag && tag.length > 0 && tag.map((tagitem, key) => {
              return <Link key={key} className={styles.link} activeClassName={styles.active} to="/explore">{tagitem.name}</Link>
          })}
        </div>
      </nav>
    )
  }
}

export default ChildBar
