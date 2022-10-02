import axios from 'axios'

const REQUEST_URL = 'http://localhost5000/v1'

async function httpGetPosts() {
	try {
		const response = await axios.get(`${REQUEST_URL}/posts`)
		return response
	} catch (error) {
		return {
			ok: 'false'
		}
	}
}

async function httpUpdatePost() {}

export { httpGetPosts, httpUpdatePost }
