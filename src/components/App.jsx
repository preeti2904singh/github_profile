import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: 'preeti2904singh',
			userData: [],
			userRepos: [],
			perPage: 5
		} 
	}
	// Get User data from github
	getUserData(){
		$.ajax({
			url: "https://api.github.com/users/"+this.state.username+"?clientId="+this.props.clientId+"&clientSecret="+this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({userData: data})
			}.bind(this),
			error: function(xhr,status,err){
				this.setState({username: null})
				alert(err);
			}.bind(this)
		})
	}
	// Get User Repos from github
	getUserRepos(){
		$.ajax({
			url: "https://api.github.com/users/"+this.state.username+"/repos?per_page="+this.state.perPage+"&clientId="+this.props.clientId+"&clientSecret="+this.props.clientSecret+"&sort=created",
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({userRepos: data})
			}.bind(this),
			error: function(xhr,status,err){
				this.setState({username: null})
				alert(err);
			}.bind(this)
		})
	}

	componentDidMount(){
		this.getUserRepos();
		this.getUserData();
	}
	render(){
		return(
			<div>
				<Search />
				<Profile userData={this.state.userData} userRepos={this.state.userRepos} />
			</div>
		)
	}
}

App.propTypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
}
App.defaultProps = {
	clientId: '6feaeaa46227e0f99eef',
	clientSecret: 'aeb7ac25f7e9aba291790eb31279a1016de64180'
}
export default App