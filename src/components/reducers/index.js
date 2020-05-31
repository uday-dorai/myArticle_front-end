
import { combineReducers } from 'redux'
import {SUCCESSFUL_LOGIN,SUCCESSFUL_LOADED_ARTICLES,SUCCESSFUL_ADDED_ARTICLES,SUCCESSFUL_LOG_OUT, SUCCESSFUL_REGISTERED,UNSUCCESSFUL_LOGIN, ALREADY_LOGIN_SUCCESS} from '../constant'

const initialState = {
    accessToken:'',
    logged_In:false,
    content: [],
    success:false,
    message:''
}

const reducers = (state = initialState, action) => {

    switch (action.type) {
        case SUCCESSFUL_LOGIN:
            return{
                accessToken:action.payload.accessToken,
                logged_In:true
            }
        case UNSUCCESSFUL_LOGIN:
            return{
                message:action.payload.message
            }
        case ALREADY_LOGIN_SUCCESS:
            console.log(action.payload)
            return{
                accessToken:action.payload,
                logged_In:true
            }
        case SUCCESSFUL_REGISTERED:
                return{
                    success:true,
                }
        case SUCCESSFUL_LOADED_ARTICLES:
            console.log(action.payload)
            return{
                accessToken:state.accessToken,
                logged_In:state.logged_In,
                content:action.payload
            }
            case SUCCESSFUL_ADDED_ARTICLES:
                return{
                    accessToken:state.accessToken,
                    logged_In:state.logged_In,
                    content:state.payload,
                    success:true,
                }
            case SUCCESSFUL_LOG_OUT:
                    return{
                        accessToken:'',
                        logged_In:false,
                        content:[],
                        success:false,
                        message:''
                    }
            
        default:
            return state;
    }
},
    rootReducer = combineReducers({
        ArticleWeb: reducers
    });

export default rootReducer;