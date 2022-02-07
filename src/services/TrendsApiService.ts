import axios from 'axios';

export const getOne = async (id, filter) => {
	const res = await axios.get(`${process.env.REACT_APP_SERVER_URI}/trends/${id}?filter=${filter}`);
	return res.data;
};

export const getAll = async (limit, offset) => {
	const res = await axios.get(
		`${process.env.REACT_APP_SERVER_URI}/trends?limit=${limit}&offset=${offset}`
	);
	return res.data;
};

export const sync = async () => {
	const res = await axios.get(`${process.env.REACT_APP_SERVER_URI}/trends/sync`);
	return res.data;
};
