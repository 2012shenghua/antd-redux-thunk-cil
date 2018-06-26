import { Route, Switch } from 'react-router-dom'
import React from 'react'
import MainMain from './containers/Main/index'
import Login from './containers/Log/index'

class Log extends React.Component {
	render() {
		return (
			<div>
				登陆登陆登陆
            </div>
		)
	}
}

const Routes = () => {
	return (
		<Switch>
			<Route path="/log" component={Login} />
			<Route path="/" component={MainMain} />
		</Switch>
	)
}

export default Routes;