import React, { Component } from 'react';
import {loadArticles} from '../actions';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

class contentpage extends Component {
    componentDidMount=()=>{
        if(this.props.login){
            this.props.loadArticles();
        }else{
            this.props.history.push('/login')
        }
        
    }
    render() {

        const content = this.props.content
        if(content !== undefined){
            return (
                <div className='contentPage'>
                    {this.props.content.map(articles =>{
                        return(
                            <div key={articles.title} className='contentOuterDiv'>
                                <div className='title'>{articles.title}</div>
                                <div class='bodycontent'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{articles.body}</div>
                                <div className='author'>~{articles.author}</div>
                            </div>                   
                        )
                    })}
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }
        
    }
}
const mapStateToProps = (state) =>{

    return {
        content:state.ArticleWeb.content,
        login:state.ArticleWeb.logged_In,
    }
}
const mapDispatchToProps ={
    loadArticles,
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(contentpage));