import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/userDetails'

var styles={
	color:'green'
}

const App = () =>(
	<div className="container">
		<h2 style={styles} >Username List:</h2>
		<UserList/>
		<hr/>
		<h2 style={styles} >User Details:</h2>
		<UserDetails></UserDetails>
	</div>

	 );

export default App;