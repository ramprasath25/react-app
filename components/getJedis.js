import axios from 'axios';

export function getJedis() {
	const url = 'http://localhost:7000/api/jedis';
	return axios.get(url)
	.then(response => response.data)
	.catch(error => error);
}

