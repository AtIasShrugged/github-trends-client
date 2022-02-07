import { useState } from 'react';
import './App.css';
import RepositoryItemForm from './components/RepositoryItemForm';
import RepositoryList from './components/RepositoryList';
import Sync from './components/Sync';

function App() {
	const arr = ['Get all repositories', 'Get one repository', 'Sync'];
	const [currentMenu, setCurrentMenu] = useState(arr[0]);

	const changeMenuMode = (e) => {
		setCurrentMenu(e.target.value);
	};

	return (
		<div className='container'>
			<select className='elem' defaultValue={currentMenu} onChange={changeMenuMode}>
				{arr.map((menu) => (
					<option key={menu} value={menu}>
						{menu}
					</option>
				))}
			</select>
			{currentMenu === 'Get all repositories' ? <RepositoryList /> : null}
			{currentMenu === 'Get one repository' ? <RepositoryItemForm /> : null}
			{currentMenu === 'Sync' ? <Sync /> : null}
		</div>
	);
}

export default App;
