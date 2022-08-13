import React from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row, Button } from 'reactstrap';
import "../App.css";

const Contacts = ({contacts, removeContact}) => {
    return (
        <Container fluid className='contacts-container'>
            <ListGroup>
                {contacts.map((contact) => <ListGroupItem key={contact.id}>
                   <Row>
                       <Col md="4">{contact.name}</Col>
                       <Col md="6">{contact.number}</Col>
                       <Col md="2">
                        <Button color="danger" onClick={() => removeContact(contact.id)}>Remove</Button>
                       </Col>
                   </Row>
                </ListGroupItem>)  }
            </ListGroup>
        </Container>
    );
};

export default Contacts;