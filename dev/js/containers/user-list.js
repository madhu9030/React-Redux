import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/userAction';


class UserList extends Component {
	maprender(){
		return this.props.users.map((name)=>{
			return (
				<li style={{cursor:'pointer'}}
				onClick={()=> this.props.selectUser(name)}
				key={name.id}> {name.first} {name.last}
				</li>

				);
		});
	}
	render(){
		return(
            <ul>
            	{this.maprender()}
            </ul>

			)
	}
}

const mapstate=(state)=> {
	return {
		users: state.users
	};
}
const matchDispatch=(dispatch)=> {
	return bindActionCreators({selectUser:selectUser},dispatch);
}
export default connect(mapstate,matchDispatch)(UserList);