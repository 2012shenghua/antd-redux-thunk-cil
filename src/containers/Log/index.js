import Log from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getUserAction from '../../actions/uesrinfo'
const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo:bindActionCreators(getUserAction, dispatch)
  }
}

const Login = connect(mapStateToProps, mapDispatchToProps)(Log)
export default Login