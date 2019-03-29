import React, {Children, Component, cloneElement} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Navbar from '../components/Navbar'
import ChildBar from '../components/ChildBar'
import Main from '../components/Main'
import actions from '../actions'
import styles from '../sass/Common'
import '../sass/global'

class Common extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.fetchTags();
  }


  render() {
    const {children, tag, ...props} = this.props
    return (
      <div className={styles.app}>
        <Navbar/>
        <ChildBar tag={tag}/>

        <Main>
          {Children.map(children, child =>
            cloneElement(child, {...props})
          )}
        </Main>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Common)
