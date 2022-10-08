import React, { createContext, useState } from 'react'

export const AppContext = createContext()
const AppProvider = ({ children }) => {
	const [user, setUser] = useState(10)
	const [ProfilePic, setProfilePic] = useState(
		'https://lh3.googleusercontent.com/a/AItbvmleUO724IgMmoUY72QvbtYNeRcIW81fCjvSK_5c=s96-c'
	)

	return <AppContext.Provider value={{ user, ProfilePic }}>{children}</AppContext.Provider>
}
export default AppProvider
