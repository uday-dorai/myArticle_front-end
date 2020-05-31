import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './components/store/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header'
import LoginPage from './components/loginPage';
import SignUpPage from './components/signUpPage';
import Content from './components/contentPage';
import AddContent from './components/addArticle';



class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
       
        <Router>
          <div className="App">
          <Header />
            <Switch>
              <Route path="/login" exact component={LoginPage} />
              <Route path="/signup" exact component={SignUpPage} />
              <Route path="/articles" exact component={Content} />
              <Route path="/articles/add" exact component={AddContent} />
            </Switch>
          </div>
        </Router>
       
      </Provider>

    );
  }

}

export default App;
