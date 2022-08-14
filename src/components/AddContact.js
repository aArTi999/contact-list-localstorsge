import React, { useState } from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { v4 } from 'uuid';
import '../App.css';
const AddContact = ({addContact, theme}) => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const saveContact = (event) => {
        event.preventDefault();
        if(name === ""){
            return alert("Name cannot be blank");
        }
        if(number === ""){
            return alert("Number cannot be blank");
        }

        const newContact = {
            name,
            number,
            id: v4(),
        };

        addContact(newContact);
        
        setName("");
        setNumber("");
    };

    return (
        <Form onSubmit={saveContact}>
            <Container fluid className={theme === 'light' ?'field-container-light': 'field-container-dark'}>
                <Row >
                    <Col md="6">
                        <FormGroup>
                            <Label className='field-label' for="name" >Name</Label>
                            <Col>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Enter name"
                                type="text"
                                className='input-field'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                                <Label className='field-label' for="phone" >Phone</Label>
                                <Col>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter phone number"
                                        type="text"
                                        className='input-field'
                                        value={number}
                                        onChange={(e) => setNumber(e.target.value)}
                                    />
                                </Col>
                        </FormGroup>
                    </Col>
                    <Button color='success'>Add Contact</Button>
                </Row>
            </Container>
        </Form>
    );
};

export default AddContact;