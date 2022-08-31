import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'
import Profile from './pages/Profile'
import Signin from './pages/Signin'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='post/:id' element={<Post />} />
				<Route path='profile/:id' element={<Profile />} />
				<Route path='signin' element={<Signin />} />
			</Routes>
		</Router>
	)
}

export default App
