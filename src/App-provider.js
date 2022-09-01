import React, { createContext, useState } from 'react'

export const AppContext = createContext()
const AppProvider = ({ children }) => {
	const [user, setUser] = useState(10)

	return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>
}
export default AppProvider