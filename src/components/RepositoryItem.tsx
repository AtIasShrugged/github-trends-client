import '../styles/RepositoryItem.css';

const RepositoryItem = (props) => {
	const { _id, repositoryName, url, username, description, forks, language, totalStars } =
		props.repository;

	return (
		<div>
			{console.log(props)}
			<div className='card'>
				<h1 className='title'>{repositoryName}</h1>
				<div className='desc'>Username: {username}</div>
				<div className='desc'>Description: {description}</div>
				<div className='desc'>url: {url}</div>
				<div className='desc'>Language: {language}</div>
				<div className='desc'>Total stars: {totalStars}</div>
				<div className='desc'>Forks: {forks}</div>
				<div className='desc'>id: {_id}</div>
			</div>
		</div>
	);
};

export default RepositoryItem;
