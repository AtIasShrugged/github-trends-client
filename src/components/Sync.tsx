import React, { useState } from 'react';
import { sync } from '../services/TrendsApiService';

import '../styles/Sync.css';
import '../App.css';

const Sync = () => {
	const [syncStatus, setSyncStatus] = useState('');

	const syncService = async () => {
		const res = await sync();
		setSyncStatus(res);
	};

	return (
		<div className='flex-column'>
			<button className='sync-button' onClick={syncService}>
				SYNC!
			</button>
			{syncStatus ? <div className='sync'>{syncStatus}</div> : null}
		</div>
	);
};

export default Sync;
