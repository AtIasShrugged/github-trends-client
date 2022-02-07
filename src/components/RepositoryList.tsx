import { useState } from 'react';
import { getAll } from '../services/TrendsApiService';

import '../App.css';
import RepositoryItem from './RepositoryItem';

const RepositoryList = () => {
	const [limit, setLimit] = useState(10);
	const [offset, setOffset] = useState(0);
	const [repositories, setRepositories] = useState([]);

	const changeLimit = (e) => {
		setLimit(e.target.value);
	};

	const changeOffset = (e) => {
		setOffset(e.target.value);
	};

	const getRepositories = async () => {
		const res = await getAll(limit, offset);
		setRepositories(res);
	};

	return (
		<div>
			<div className='flex-row'>
				<div className='flex-column'>
					<div className='label'>Limit</div>
					<input className='elem' placeholder='Limit' value={limit} onChange={changeLimit}></input>
				</div>
				<div className='flex-column'>
					<div className='label'>Offset</div>
					<input
						className='elem'
						placeholder='Offset'
						value={offset}
						onChange={changeOffset}></input>
				</div>
			</div>

			<button className='elem' onClick={getRepositories}>
				Get repositories
			</button>
			{repositories.length ? (
				<div className='list'>
					{repositories.map((repository) => (
						<RepositoryItem key={repository._id} repository={repository} />
					))}
				</div>
			) : null}
		</div>
	);
};

export default RepositoryList;
