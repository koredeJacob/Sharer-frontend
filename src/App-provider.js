import React, { createContext, useState } from 'react'

export const AppContext = createContext()
const AppProvider = ({ children }) => {
	const [user, setUser] = useState()
	const [ProfilePic, setProfilePic] = useState()

	return <AppContext.Provider value={{ user, ProfilePic }}>{children}</AppContext.Provider>
}
export default AppProvider
