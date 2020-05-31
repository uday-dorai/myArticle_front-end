import React, { Component } from 'react';
import Logo from '../../images/logo.png';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {logOut} from '../actions';


class header extends Component {
    onClickLogin = (e) =>{
        e.preventDefault();
        this.props.history.push('/login')
    } 

    onClickAdd = (e) =>{
        e.preventDefault();
        this.props.history.push('/articles/add')
    } 

    onClickLogOut = async (e) =>{
        e.preventDefault();
       await  this.props.logOut()
       await this.props.history.push('/login')
    } 
    render() {
        if(this.props.login){
            return (
                <div className='header'>
                    <div className='logo'>
                        <div className='logoImg'>
                            <img src={Logo} alt=''></img>
                        </div>
                    </div>
                    <div className='login_sidebar'>
                        <button onClick={this.onClickAdd} className='headerBtn'>add Article</button>
                        <button onClick={this.onClickLogOut} className='headerBtn'>Log Out</button>
                    </div>
                </div>
            )
        }else{
            return (
                <div className='header'>
                    <div className='logo'>
                        <div className='logoImg'>
                            <img src={Logo} alt=''></img>
                        </div>
                    </div>
                    <div className='login_sidebar'>
                    <button className='headerBtn'>My Articles</button>
                        <button onClick={this.onClickLogin} className='headerBtn'>login</button>
                    </div>
                </div>
            )
        }
        
    }
}
const mapStateToProps = (state) =>{
    return {
        login:state.ArticleWeb.logged_In
    }
}

const mapDispatchToProps ={
    logOut,
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(header));