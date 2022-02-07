import React, { useState } from 'react';
import { getOne } from '../services/TrendsApiService';
import RepositoryItem from './RepositoryItem';

import '../App.css';

const RepositoryItemForm = () => {
	const [filter, setFilter] = useState('id');
	const [id, setId] = useState('');
	const [repository, setRepository] = useState(null);

	const changeFilter = (e) => {
		setFilter(e.target.value);
	};

	const changeId = (e) => {
		setId(e.target.value);
	};

	const getRepository = async () => {
		if (!id) {
			return;
		}
		const res = await getOne(id, filter);
		setRepository(res);
	};

	return (
		<div>
			<select className='elem' defaultValue={filter} onChange={changeFilter}>
				<option value='id'>Id</option>
				<option value='name'>Name</option>
			</select>
			<input className='elem' placeholder='Repository id' value={id} onChange={changeId}></input>
			<button className='elem' onClick={getRepository}>
				Get repository
			</button>
			{repository ? <RepositoryItem repository={repository} /> : null}
		</div>
	);
};

export default RepositoryItemForm;
