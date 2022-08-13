import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
const App = () => {
  const [contacts, setContacts] = useState([]); 

  useEffect(() =>{
    const storageContacts = JSON.parse(localStorage.getItem('contacts'));
    setContacts(storageContacts);
  }, []);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const removeContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
   <Container className='body' fluid>
     <h1 className='head-text'>Humare Sampark</h1>
     <Contacts contacts={contacts} removeContact={removeContact} />
     <AddContact addContact={addContact} />
   </Container> 
  );
};

export default App;