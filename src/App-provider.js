import React, { createContext, useState } from 'react'

export const AppContext = createContext()
const AppProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [Posts, setPosts] = useState(null)

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
