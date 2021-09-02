import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import styled from 'styled-components';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Equipment from './pages/Equipment';

const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
`;

function App() {
	return (
		<Router>
			<StyledApp>
				<Navbar />
				<div className="py-12 px-8 flex w-full">
					<Sidebar />

					<Switch>
						<Route path="/equipment" component={Equipment} />
					</Switch>
				</div>
			</StyledApp>
		</Router>
	);
}

export default App;
