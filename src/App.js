import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main'
import Footer from './components/footer/Footer';
import ModelBlog from './components/model-blog/ModelBlog';

class App extends Component {
  
  render () {
    return (
      <div className="App">
        <Navbar />
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/:id" component={ModelBlog} />
        </Switch>
      </BrowserRouter>   
        <Footer />
      </div>
    );
  }
}

export default App;


