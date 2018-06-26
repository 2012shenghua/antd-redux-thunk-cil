// import { Route, Switch } from 'react-router-dom'
import React from 'react'
import { Button } from 'antd'

class Log extends React.Component {
	componentDidMount(){
		this.props.getUserInfo();
	}
	render() {
		let userInfo = this.props.userInfo.data;
		return (
			<div>
				登陆登陆登陆
				<div>{ userInfo===undefined ? '':userInfo.name }</div>
            </div>
		)
	}
}

export default Log