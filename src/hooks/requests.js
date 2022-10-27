import axios from 'axios'

const REQUEST_URL = '/v1'

async function httpGetPosts() {
	try {
		const response = await axios.get(`${REQUEST_URL}/posts`)
		return response
	} catch (error) {
		return {
			ok: false
		}
	}
}

async function httpAddNewPost(postTitle, postContent) {
	try {
		const response = await axios.post(`${REQUEST_URL}/posts`, {
			postTitle,
			postContent
		})
		return response
	} catch (error) {
		return {
			ok: false
		}
	}
}

async function httpGetPostById(id) {
	try {
		const response = await axios.get(`${REQUEST_URL}/posts/${id}`)
		return response
	} catch (error) {
		return {
			ok: false
		}
	}
}

async function httpUpdateLikes(id) {
	try {
		const response = await axios.put(`${REQUEST_URL}/posts/updatelikes/${id}`)
		return response
	} catch (error) {
		return {
			ok: false
		}
	}
}

async function httpDeletePost(id) {
	try {
		const response = await axios.delete(`${REQUEST_URL}/posts/${id}`)
		return response
	} catch (error) {
		return {
			ok: false
		}
	}
}

async function httpAddComment(id, comment) {
	try {
		const response = await axios.put(`${REQUEST_URL}/posts/addcomment/${id}`, {
			comment
		})
		return response
	} catch (error) {
		return {
			ok: false
		}
	}
}

async function httpRemoveComment(id, commentid) {
	try {
		const response = await axios.put(`${REQUEST_URL}/posts/removecomment/${id}`, {
			commentid
		})
		return response
	} catch (error) {
		return {
			ok: false
		}
	}
}

async function httpGetUser() {
	try {
		const response = await axios.get(`${REQUEST_URL}/users/user`)
		return response
	} catch (error) {
		return {
			ok: false
		}
	}
}

async function httpsignin() {
	try {
		const response = await axios.get(`${REQUEST_URL}/auth/google`)
		return response
	} catch (error) {
		return {
			ok: false
		}
	}
}

async function httpsignout() {
	try {
		const response = await axios.get(`${REQUEST_URL}/auth/logout`)
		return response
	} catch (error) {
		return {
			ok: false
		}
	}
}

async function httpGetUserById(id) {
	try {
		const response = await axios.get(`${REQUEST_URL}/users/${id}`)
		return response
	} catch (error) {
		return {
			ok: false
		}
	}
}

export {
	httpGetPosts,
	httpAddNewPost,
	httpUpdateLikes,
	httpGetPostById,
	httpDeletePost,
	httpAddComment,
	httpRemoveComment,
	httpGetUser,
	httpGetUserById,
	httpsignin,
	httpsignout
}
