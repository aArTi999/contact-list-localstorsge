import React from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row, Button } from 'reactstrap';
import "../App.css";

const Contacts = ({theme, contacts, removeContact}) => {
    return (
        <Container fluid className='light-contacts-container'>
            <ListGroup>
                {contacts.map((contact) => <ListGroupItem key={contact.id} color={theme === 'dark' ?'secondary' : 'success'}>
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