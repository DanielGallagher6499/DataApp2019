import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/content';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';
import Trending from './components/trending';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App"
        >
          <Navbar bg="dark" variant="dark">
            
          <Navbar.Brand href="/">
        <img
        alt="LOGO"
        src="https://cdn2.iconfinder.com/data/icons/retro-games-in-color/64/retro-games-colored-10-512.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {' GameSpot'}
    </Navbar.Brand>
            
            <Nav className="mr-auto">
              <Nav.Link href="/read">New Posts</Nav.Link>
              <Nav.Link href="/trending">Trending</Nav.Link>
              <Nav.Link href="/create">Create a post</Nav.Link>
            </Nav>
          </Navbar>
          
          <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/create" component={Create} />
            <Route path="/read" component={Read} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/trending" component={Trending} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;