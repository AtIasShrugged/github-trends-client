import { Button } from 'antd';
import { useState } from 'react';
import './App.css';

function App() {
	const [repositories, setRepositories] = useState([]);

	return (
		<div className='container'>
			<Button type='primary'>Load repositoryes</Button>
			<Button type='primary'>Load one repository</Button>
			<Button type='primary'>Sync internal timer</Button>
		</div>
	);
}

export default App;
