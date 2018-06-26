import Main from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import counter from '../../actions/index'
const mapStateToProps = (state) => {
  return {
    text: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    AddFucn:bindActionCreators(counter, dispatch)
  }
}

const MainMain = connect(mapStateToProps, mapDispatchToProps)(Main)
export default MainMain