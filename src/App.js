import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Counter from './Counter/view';
import Layout from './components/Layout';
import Form from './Form';
function App() {
	return (
		<Router>
			<Layout>
				<Route exact path="/" component={Home} />
				<Route exact path="/counter" component={Counter} />
				<Route exact path="/form" component={Form} />
			</Layout>
		</Router>
	);
}

export default App;
