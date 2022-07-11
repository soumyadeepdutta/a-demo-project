import { useState } from "react";
import {
  Navbar,
  Container,
  // NavDropdown,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
import Details from "./Details";

function App() {
  const [number, setNumber] = useState("");
  const [details, setDetails] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/details", {
      method: "POST",
      body: JSON.stringify({
        number: number,
      }),
      mode: "cors",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (!json.data) return window.alert("No data found!");
        setDetails(json.data ? json.data : "");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Get Phone number Details</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter number"
            pattern="[0-9]*"
            maxLength={10}
            onChange={(e) => setNumber(e.target.value)}
          />
          <Form.Text className="text-muted">
            Paste the number you want to search
          </Form.Text>
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button
          variant="warning"
          type="reset"
          style={{ marginLeft: "10px" }}
          onClick={() => setNumber("")}
        >
          Reset
        </Button>
      </Form>
      <Details details={details} />
    </div>
  );
}

export default App;
