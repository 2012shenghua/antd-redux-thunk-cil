import { Route, Switch } from 'react-router-dom'
import React from 'react'
import { Button } from 'antd'

class Main extends React.Component {
	render() {
		console.log(this.props)
		return (
			<div>
				<Button onClick={this.props.AddFucn}>加</Button>
				首页首页首页首页
				<label>{this.props.text}</label>
			</div>
		)
	}
}

export default Main