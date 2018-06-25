import React from 'react';
import { Menu, Icon, Button } from 'antd';
import './index.css'
import { Link } from 'react-router-dom'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MenuPage extends React.Component {
	state = {
		collapsed: false,
	}
	toggleCollapsed = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}
	render() {
		return (
			<div className="maintain">
				{/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
							<Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
						</Button> */}
				<div className="title">
					<img style={{ width: '35px', marginRight: '10px' }} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
					<span style={{ fontSize: '20px' }}>charles</span>
				</div>
				<Menu
					className="align-left"
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['appManage']}
					mode="inline"
					theme="dark"
					inlineCollapsed={this.state.collapsed}
				>
					<SubMenu key="appManage" title={<span><Icon type="pie-chart" /><span>应用管理</span></span>}>
						<SubMenu key="appManage-sub-1" title="应用列表">
							<Menu.Item key="appManage-1">应用创建/修改</Menu.Item>
						</SubMenu>
						<SubMenu key="releaseSheet" title="发布单" >
								<Menu.Item key="releaseSheet-1"><Link to='/'>发布单列表</Link></Menu.Item>
							<Menu.Item key="releaseSheet-2"><Link to='/log'>新建发布单</Link></Menu.Item>
						</SubMenu>
					</SubMenu>
					<SubMenu key="monitoringAlarm" title={<span><Icon type="folder" /><span>监控告警</span></span>}>
						<Menu.Item key="monitoringAlarm-1">监控列表</Menu.Item>
						<Menu.Item key="monitoringAlarm-2">订阅配置</Menu.Item>
					</SubMenu>
					<SubMenu key="console" title={<span><Icon type="bar-chart" /><span>工作流控制台</span></span>}>
						<Menu.Item key="console-1">资源池申请</Menu.Item>
						<Menu.Item key="console-2">上线申请</Menu.Item>
						<Menu.Item key="console-3">应用发布单</Menu.Item>
						<Menu.Item key="console-4">----组管理员工作流-----</Menu.Item>
					</SubMenu>
				</Menu>
			</div>
		);
	}
}
export default MenuPage
