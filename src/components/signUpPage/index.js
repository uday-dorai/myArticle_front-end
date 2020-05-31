import React, { Component } from 'react'
import {Link,withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {newUser} from '../actions';


class signUpPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email:'',
            address: ''

        };
    }

    onChangeHandler=(e)=>{
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    onsubmitHandler=(e)=>{
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password,email,address } = this.state;
        if (username && password && email && address) {
            this.props.newUser(username, password,email,address);
        }
    }
    componentDidUpdate=()=>{
        if(this.props.success){
            this.props.history.push('/login')
        }
    }

    

    render() {
        const { username, password, email, address} = this.state;
        return (
            <div className='signUppage'>
                <h4>Fill Details</h4>
                <form className='signUpDetail' onSubmit={this.onsubmitHandler}>
                    <div className='register'>
                        <label>username: </label>
                        <input type="text" 
                        className="input-username" 
                        name="username" 
                        value={username} 
                        onChange={this.onChangeHandler} />
                    </div>
                    <div className='register'>
                        <label>password:</label>
                        <input type="password" 
                        className="input-username" 
                        name="password" 
                        value={password} 
                        onChange={this.onChangeHandler} />
                    </div>
                    <div className='register'>
                        <label>Email:</label>
                        <input type="text" 
                        className="input-email" 
                        name="email" 
                        value={email} 
                        onChange={this.onChangeHandler} />
                    </div>
                    <div className='register'>
                        <label>Address:</label>
                        <input type="address" 
                        className="input-address" 
                        name="address" 
                        value={address} 
                        onChange={this.onChangeHandler} />
                    </div>
                    
                    <div className='loginBtn'>
                        <div className='backbtn'>
                            <Link to="/login" className="back">back</Link>
                        </div>
                        <button type='submit'>submit</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{

    return {
        success:state.ArticleWeb.success
    }
}
const mapDispatchToProps ={
    newUser,
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(signUpPage));