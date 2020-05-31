import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {userLogin,alreadyLogin} from '../actions';

class loginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    componentDidMount=()=>{
        const token =localStorage.getItem("Token")
        if(token !== null){ 
            this.props.alreadyLogin(token);
        }
    }
    componentDidUpdate=()=>{
        if(this.props.data){
            this.props.history.push('/articles')
        }
    }

    onChangeHandler=(e)=>{
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    onsubmitHandler=(e)=>{
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.userLogin(username, password);
        }
    }


    Message=()=>{
        const {message} = this.props
        if(message !== ''){
            return(
                <div>{message}</div>
            )
        }else{
            return
        }
        
    }
    render() {
        const { username, password } = this.state;
       
        return (
            <div className='loginPage'>
                <h1>login</h1>
                {this.Message()}
                <form className='loginDetail' onSubmit={this.onsubmitHandler}>
                    <div className='input'>
                        <label>Username</label>
                        <input type="text" 
                        className="input-username" 
                        name="username" 
                        value={username} 
                        onChange={this.onChangeHandler} />
                    </div>
                    <div className='input'>
                        <label>Password</label>
                        <input type="password" 
                        className="input-username" 
                        name="password" 
                        value={password} 
                        onChange={this.onChangeHandler} />
                    </div >
                    
                    <div className='loginBtn'>
                        <div className='signUpBtn '>
                            <Link to="/signup" className="back">Register</Link>
                        </div>
                        <button className='signUpBtn btn' type='submit'>login</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        data:state.ArticleWeb.logged_In,
        message:state.ArticleWeb.message
    }
}
const mapDispatchToProps ={
    userLogin,
    alreadyLogin
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(loginPage));