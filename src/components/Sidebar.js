import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledSidebar = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 250px;
	background-color: #fff;
	border-radius: 6px;
	padding: 15px 0;
	margin-right: 50px;
`;

const SidebarItem = styled(NavLink)`
	position: relative;
	display: flex;
	align-items: center;
	padding: 5px 20px;
	font-weight: 500;
	cursor: pointer;
	transition: 0.3s;

	&::after {
		position: absolute;
		content: '';
		left: 0;
		top: 0;
		bottom: 0;
		width: 4px;
		opacity: 0;
		background-color: var(--clr-blue);
		transition: 0.3s;
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(0, 83, 255, 0.3);
		opacity: 0;
		transition: 0.3s;
	}

	&:hover,
	&.active {
		color: var(--clr-blue);
		.icon {
			color: var(--clr-blue);
		}

		&::after,
		&::before {
			opacity: 1;
		}
	}

	.icon {
		margin-right: 15px;
		font-size: 30px;
	}
`;

const Sidebar = () => {
	return (
		<StyledSidebar>
			<SidebarItem to="/" exact>
				<span className="icon mdi mdi-view-dashboard"></span>
				<div>Dashboard</div>
			</SidebarItem>
			<SidebarItem to="/equipment" activeClassName="active">
				<span className="icon mdi mdi-view-list-outline"></span>
				<div>Equipment</div>
			</SidebarItem>
			<SidebarItem to="/reports" exact>
				<span className="icon mdi mdi-file-chart-outline"></span>
				<div>Reports</div>
			</SidebarItem>
			<SidebarItem to="/users" exact>
				<span className="icon mdi mdi-account-supervisor"></span>
				<div>Users</div>
			</SidebarItem>
			<SidebarItem to="/item-booking" exact>
				<span className="icon mdi mdi-calendar-month"></span>
				<div>Item Booking</div>
			</SidebarItem>
			<SidebarItem to="/tag-bazaar" exact>
				<span className="icon mdi mdi-tag"></span>
				<div>Tag Bazaar</div>
			</SidebarItem>
			<SidebarItem to="/tutorials" exact>
				<span className="icon mdi mdi-youtube-tv"></span>
				<div>Tutorials</div>
			</SidebarItem>
			<SidebarItem to="/feedback" exact>
				<span className="icon mdi mdi-message-alert"></span>
				<div>Feedback</div>
			</SidebarItem>
			<SidebarItem to="/exchange" exact>
				<span className="icon mdi mdi-autorenew"></span>
				<div>Exchange</div>
			</SidebarItem>
			<SidebarItem to="/rankings" exact>
				<span className="icon mdi mdi-medal"></span>
				<div>Rankings</div>
			</SidebarItem>
			<SidebarItem to="/ai-recommend" exact>
				<span className="icon mdi mdi-finance"></span>
				<div>AI Recommend</div>
			</SidebarItem>
		</StyledSidebar>
	);
};

export default Sidebar;
