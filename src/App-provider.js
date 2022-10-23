import React, { createContext, useState } from 'react'
import posts from './post.json'

export const AppContext = createContext()
const AppProvider = ({ children }) => {
	const [user, setUser] = useState({
		userID: 1,
		profileName: 'something verylong',
		profilePicture:
			'https://lh3.googleusercontent.com/a/AItbvmleUO724IgMmoUY72QvbtYNeRcIW81fCjvSK_5c=s96-c'
	})
	const [Posts, setPosts] = useState(posts)

	const updatePosts = (posts) => {
		setPosts(posts)
	}

	const updateUser = (userdetails) => {
		setUser(userdetails)
	}

	return (
		<AppContext.Provider value={{ user, updateUser, Posts, updatePosts }}>
			{children}
		</AppContext.Provider>
	)
}
export default AppProvider
