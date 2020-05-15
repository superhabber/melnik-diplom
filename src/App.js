import React, { Component } from 'react';

import Index from './components/pages/Index'
import Footer from './components/blocks/Footer'
import Header from './components/blocks/Header'
import Create from './components/pages/Create';
import Cabinet from './components/pages/Cabinet';
import Login from './components/pages/Login';

import { BrowserRouter, Route } from 'react-router-dom';
import View from './components/pages/View';
import About from './components/pages/About';
import Search from './components/pages/Search';

class App extends Component {

  setUserToken = (token, r) => {
    this.setState({ usertoken: token })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>

          <Header />

          <Route exact path="/">
            <Index />
          </Route>

          <Route exact path="/search/:query?" component={Search}>
            {/* <Search query="a"/> */}
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/cabinet">
            <Cabinet />
          </Route>

          <Route path="/petitions/:id">
            <View />
          </Route>

          <Route exact path="/login">
            <Login setUserToken={this.setUserToken} />
          </Route>

          <Route exact path="/create">
            <Create />
          </Route>

          {/* <Cabinet/> */}

          <Footer />

        </BrowserRouter>
      </div>
    )
  }
}

export default App;
