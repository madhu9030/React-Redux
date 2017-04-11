import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetails extends Component{
	render(){
		if(!this.props.user){
			return (<h2>Please select the user.....</h2>);
		};
		return(
			<div className='well' style={{width:'500px'}}>
				<img style={{width:'200px'}}src={this.props.user.thumbnail}/>
				<h2>first-last:{this.props.user.first} {this.props.user.last}</h2>
				<h3>Age:{this.props.user.age}</h3>
				<h3>Description:{this.props.user.description}</h3>
			</div>

			);
	}
}
const mapstate=(state)=> {
	return {
		user: state.activeUser
	};
}
export default connect(mapstate)(UserDetails);