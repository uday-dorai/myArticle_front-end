export const userLogin=(username,password)=>{
    return{
        type:'LOGIN_DETAIL',
        data:{
            username:username,
            password:password
        }
    }
}

export const newUser=(username,password,email,address)=>{
    console.log(username)
    return{
        type:'NEW_USER_DETAIL',
        data:{
            username:username,
            password:password,
            email:email,
            address:address
        }
    }
}

export const loadArticles=()=>{
    return{
        type:'LOAD_ARTICLES',
    }
}

export const addNewArticle=(title,body,author,accessToken)=>{
    return{
        type:'ADD_ARTICLES',
        data:{
            title:title,
            body:body,
            author:author,
            accessToken:accessToken
        }
    }
}

export const logOut=()=>{
    return{
        type:'LOG_OUT',
    }
}


export const alreadyLogin=(token)=>{
    return{
        type:'ALREADY_LOGIN',
        accessToken:token
    }
}