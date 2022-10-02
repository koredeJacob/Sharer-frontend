import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PostDetails from './pages/PostDetails'
import Profile from './pages/Profile'
import Signin from './pages/Signin'

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='post/:id' element={<PostDetails />} />
					<Route path='profile/:id' element={<Profile />} />
					<Route path='newpost' />
					<Route path='signin' element={<Signin />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
