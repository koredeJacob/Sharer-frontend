import React, { createContext, useState } from 'react'

export const AppContext = createContext()
const AppProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	const updateUser = (userdetails) => {
		setUser(userdetails)
	}

	return <AppContext.Provider value={{ user, updateUser }}>{children}</AppContext.Provider>
}
export default AppProvider
