
 
import {all,fork,takeEvery,put} from 'redux-saga/effects';

function* getUserLoginData() {
    yield takeEvery('LOGIN_DETAIL', getUserLoginData_Worker)
}

function* getUserLoginData_Worker(loginDetails) {
    const detail = loginDetails.data;
    const url = `login`
    const payload = yield fetch(url, { 
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(detail), 
         })
         .then(resp => {
        if(resp.status === 200){
            return resp.json()
        }else if(resp.status === 403){
            return {message:"Invalid username or password "}
        }else{
            return {message:"server error "}

        }
         })
    if(payload.message === 'success'){
        localStorage.setItem("Token",payload.accessToken)
        yield put({ type: 'SUCCESSFUL_LOGIN', payload })
    }else{
        yield put({ type: 'UNSUCCESSFUL_LOGIN', payload })
    }
    

}



function* newUserDetails() {
    yield takeEvery('NEW_USER_DETAIL', newUserDetails_Worker)
}

function* newUserDetails_Worker(newUserDetails) {
    const detail = newUserDetails.data;
    const url = `http://localhost:8000/register`
    const payload = yield fetch(url, { 
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(detail)
    }) 
    yield put({ type: 'SUCCESSFUL_REGISTERED', payload })

}

// load the articles fron db
function* loadAllArticles() {
    yield takeEvery('LOAD_ARTICLES', loadAllArticles_worker)
}

function* loadAllArticles_worker() {
    
    const url = `http://localhost:8000/articles`
    const payload = yield fetch(url, { 
        method: 'GET',
    }).then(resp => { return resp.json() })
    yield put({ type: 'SUCCESSFUL_LOADED_ARTICLES', payload })

}

// add new article
function* addnewArticles() {
    yield takeEvery('ADD_ARTICLES', addnewArticles_worker)
}

function* addnewArticles_worker(newArticleData) {
    const data =newArticleData.data;
    const bearerToken = newArticleData.data.accessToken
    const url = `http://localhost:8000/articles`
    const payload = yield fetch(url, { 
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:`bearer ${bearerToken}`
        },
        body: JSON.stringify(data)
    })
    yield put({ type: 'SUCCESSFUL_ADDED_ARTICLES', payload })

}



// log out the user
function* logOut() {
    yield takeEvery('LOG_OUT',logOut_worker)
}

function* logOut_worker() {
    localStorage.removeItem("Token")
    yield put({ type: 'SUCCESSFUL_LOG_OUT' })

}

// already user is logged in
function* alreadyLogin() {
    yield takeEvery('ALREADY_LOGIN',alreadyLogin_worker)
}

function* alreadyLogin_worker(data) {
    const payload = data.accessToken
    yield put({ type: 'ALREADY_LOGIN_SUCCESS',payload })

}

export default function* rootSaga() {
    yield all([
        fork(getUserLoginData),
        fork(newUserDetails),
        fork(loadAllArticles),
        fork(addnewArticles),
        fork(logOut),
        fork(alreadyLogin),

    ]);
}