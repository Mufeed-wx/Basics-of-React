import './App.css';
import React, { useState } from 'react';
import Headrer from './componenets/header';
import Home from './componenets/home';
import States from './componenets/states';
import { Accordion, Modal, Button, Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [color, setColor] = useState('green')
  const [count, setCount] = useState(0)
  const changColor = () => {
    setColor('black')
  }
  const incrimentCount = () => {
    setCount(count + 1);
  }
  const decrimentCount = () => {
    setCount(count - 1);
  }
  return (
    <div className="App">

      {/* Using Bootstrap navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Using Header */}
      <Headrer></Headrer>

      {/* Using Props */}
      <Container>
        <States name={'Kerala'} />
        <States name={'Thamilnad'} />
        <States name={'Karnataka'} />
        <States name={'Andhrapradesh'} />
      </Container>

      {/* Using Home Componenet */}
      <Home />

      {/* Using Dom actions */}
      <h1>My Favorrite color is {color}</h1>
      <Button onClick={changColor} variant="warning">Change color</Button>

      <br />
      <br />

      {/* Using useState */}
      <h1>Set count {count}</h1>
      <Button className='m-2' variant="success" onClick={incrimentCount}>+</Button>
      <Button onClick={decrimentCount} variant="danger">-</Button>
      
    </div>
  );
}

export default App;
