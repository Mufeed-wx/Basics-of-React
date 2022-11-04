import './App.css';
import React, { useState } from 'react';
import Headrer from './componenets/header';
import Home from './componenets/home';
import States from './componenets/states';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
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

  const statesList = [
    { name: 'kerala', language: 'malayalam', population: 300 },
    { name: 'Tamilnadu', language: 'Tamil', population: 300 },
    { name: 'Karnataka', language: 'kannada', population: 300 },
    { name: 'Andhrapradesh', language: 'telgu', population: 300 },
  ]
  const products = [
    { name: 'Laptop', Company: 'HP', Qty: 1, id: 1 },
    { name: 'Laptop', Company: 'Lenova', Qty: 1, id: 2 },
    { name: 'Laptop', Company: 'Dell', Qty: 1, id: 3 }
  ]
  const [items, setItem] = useState(products)
  const changeQty = (id) => {
    const newItem = items.map((item) =>
      item.id === id ? { ...item, Qty: item.Qty + 1 } : item
    );
    setItem(newItem)
  }
  let value = 0;
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
        <States states={statesList} />
      </Container>

      {/* Using Home Componenet and using conditional rendering */}
      <Home status={false} />

      {/* Using Dom actions */}
      <h1>My Favorrite color is {color}</h1>
      <Button onClick={changColor} variant="warning">Change color</Button>

      <br />
      <br />

      {/* Using useState */}
      <h1>Set count {count}</h1>
      <Button className='m-2' variant="success" onClick={incrimentCount}>+</Button>
      <Button onClick={decrimentCount} variant="danger">-</Button>


      {/* Using conditional rendering */}
      {value > 0 ? <h1>Value is positive</h1> : value < 0 ? <h1>Value is negative</h1> : <h1>Value is zero</h1>}
      <br />
      <br />
      <h4>Using React Keys</h4>
      <hr />
      <div>
        {items.map((data) => (
          <div className='bg-primary m-2 text-white p-2' key={data.id}>
            <h1>{data.name}</h1>
            <h2>Company:{data.Company}</h2>
            <h3>Quantity:{data.Qty}</h3>
            <Button onClick={() => changeQty(data.id)} variant="secondary" type='button'>+</Button>
          </div>
        ))
        }
      </div>
    </div>
  );
}

export default App;
