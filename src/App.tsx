import './App.css';
import GameCardList from './components/GameCardList';
import Layout from './components/Layout';

function App() {
	return (
		<Layout>
			<h1 className='text-3xl'>HeadLine</h1>
			<div className='grid col-span-full md:grid-cols-3 lg:grid-cols-4 gap-1'>
				<GameCardList />
			</div>
		</Layout>
	);
}

export default App;
