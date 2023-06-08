import "./App.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

function App() {
  return (
    <div className="App">
      <h1>Bootstrap Website</h1>

      <Nav activeKey={"/home"}>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About Us</Nav.Link>
        </Nav.Item>
      </Nav>

      <Form>
        <Form.Group controlId=" formBAsicEmail">
          <Form.Label>Email Address:</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
          <Form.Text className="text-muted">
            We'll Probably Share Your Info!
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label> Password: </Form.Label>
          <Form.Control type="password" placeholder="Enter Password"/>
        </Form.Group>

        <Form.Group controlId="formBasicCheckBox">
          <Form.Check type="checkbox" label="Submit My Data To The NSA too!" />
        </Form.Group>

        <Form.Group>
          <Form.Label> Favorite Brand of Food </Form.Label>
          <Form.Control as ="select">
            <option> Sushi </option>
            <option> Tacos </option>
            <option> Fries </option>
            <option> Turon </option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">Hello World</Button>

      </Form>

    </div>
  );
}

export default App;
