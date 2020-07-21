import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 
import Arts from './Arts';
import SpecificArt from './SpecificArt'
import SeeDetail from './SeeDetail'
import {Container} from 'react-bootstrap';
import Artist from './Artist';
import ContactUs from './ContactUs'


function App() {
  return (
    <div className="App  bg-secondary">
      <Container className="center">
        <br></br><br></br>
      <h1>VMuseum</h1></Container>
      <br></br>
      <br></br>
      <div><Router>
           <div className='navbar'>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">≡</Navbar.Brand>
            <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Paintings">Paintings</Nav.Link>
      <Nav.Link href="/Artists">Artists</Nav.Link>
      <Nav.Link href="/Opinions">Opinions</Nav.Link>
      <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
    </Nav>
    <Form className="form-inline">
    <Button variant="outline-info">Search</Button> 
    &#160;&#160;
      <div className="form-group mb=2">
      <FormControl type="text" placeholder="Search" />
      </div>
      </Form>
      &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
    <Nav className="mr-right">
      <Nav.Link href="/YourChoice">Your Choice</Nav.Link>
      </Nav>
  </Navbar>
  <br />
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/Paintings">
            <Paintings />
          </Route>
          <Route path="/YourChoice">
            <Paintings />
          </Route>
          <Route path="/Opinions">
            <Paintings />
          </Route>
          <Route path="/Contactus">
            <ContactUs />
          </Route>
          <Route path="/SpecificArt">
            <Users />
          </Route>
          <Route path="/Detail">
            <Detail />
          </Route>
          <Route path="/Artists">
            <Artist></Artist>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router></div>
      <br></br>
    </div>
  );
}
function HomePage() {
  return <div><Home></Home></div>;
}

function Paintings() {
  return (<div><br></br><Arts></Arts></div>);
}

function Users() {
  return <div><SpecificArt></SpecificArt></div>;
}
function Detail(){
  return <div><SeeDetail></SeeDetail></div>;
}
function Artists(){
  return <div><Artist></Artist></div>
}
function Contactus(){
  return <div><ContactUs></ContactUs></div>
}
export default App;
