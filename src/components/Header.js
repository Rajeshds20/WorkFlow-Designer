import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <div>
            <Navbar style={{ backgroundColor: "blue" }} bg="light" variant="light">
                <Container style={{ backgroundColor: "blueViolet" }}>
                    <Navbar.Brand style={{ fontSize: "40px", }} href="/">React WorkFlows</Navbar.Brand>
                    <Nav style={{ fontSize: "30px", }} className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/#workflows">Work Flows</Nav.Link>
                        <Nav.Link href="/contact/">Contact</Nav.Link>
                        <Nav.Link href="https://reactflow.dev/">Refer</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
}

const Header = () => {
    return (
        <NavBar />
    )
}

export default Header;