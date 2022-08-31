import React, { useContext } from 'react'
import { AppContext } from '../App-provider'
import useUser from '../hooks/useUser'

const Home = () => {
	const { user } = useContext(AppContext)
	const { Posts } = useUser(user)

	if (!Posts) {
		return <p>Loading...</p>
	}
	return <p>home</p>
}

export default Home
