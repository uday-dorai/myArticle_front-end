import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {addNewArticle} from '../actions';


class addArticle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            author:''
        };
    }

    onChangeHandler=(e)=>{
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }


    onsubmitHandler = async (e)=>{
        e.preventDefault();
        const { title, body,author } = this.state;
        const {accessToken} = this.props

        if (title && body && author ) {
            await this.props.addNewArticle(title, body,author,accessToken);
        }
    }

    componentDidUpdate=()=>{
        if(this.props.success){
            this.props.history.push('/articles')
        }
    }
    

    render() {
        const { title, body, author} = this.state;
        return (
            <div className='addArticlePage'>
                <h4>Fill Details</h4>
                <form className='articleDetail' onSubmit={this.onsubmitHandler}>
                    <div className='addArticle'>
                        <label>Title: </label>
                        <input type="text" 
                        className="input-title" 
                        name="title" 
                        value={title} 
                        onChange={this.onChangeHandler} />
                    </div>
                    <div className='addArticle'>
                        <label>Body:</label>
                        <textarea type="body" 
                        className="input-body" 
                        name="body" 
                        value={body} 
                        onChange={this.onChangeHandler} />
                    </div>
                    <div className='addArticle'>
                        <label>Author:</label>
                        <input type="text" 
                        className="input-author" 
                        name="author" 
                        value={author} 
                        onChange={this.onChangeHandler} />
                    </div>
                    <div className='addBtm'>
                        <div className='backbtn'>
                            <Link to="/articles" className="back">back</Link>
                        </div>
                        <button type='submit' className='btn'>add</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{

    return {
        accessToken:state.ArticleWeb.accessToken,
        success:state.ArticleWeb.success
    }
}
const mapDispatchToProps ={
    addNewArticle,
}
export default connect(mapStateToProps,mapDispatchToProps)(addArticle);