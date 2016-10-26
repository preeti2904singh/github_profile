import React, {Component} from 'react';

class Search extends Component {
	onSubmit(e){
		e.preventDefault();
		console.log('submitted');
		var username = this.refs.username.value.trim();
		if (!username){
			alert('Please enter a username');
		}
		this.props.onFormSubmit(username);
		this.refs.username.value = '';
	}
	render(){
		return(
			<div>
				<form onSubmit={this.onSubmit.bind(this)}>
					<label> Search Github User</label>
					<input type="text" ref='username' className='form-control' />
				</form>
			</div>
		)
	}
}
export default Search
