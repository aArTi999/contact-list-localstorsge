import React, { useEffect, useState } from 'react';
import { Button, Container } from 'reactstrap';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
const App = () => {
  const [contacts, setContacts] = useState([]); 
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storageContacts = JSON.parse(localStorage.getItem('contacts'));
    const storageTheme = localStorage.getItem('theme');
    if(storageTheme){
      setTheme(storageTheme);
    }
    if(storageContacts && storageContacts.length){
      setContacts(storageContacts);
    }
    
  }, []);

  // This will be used when new Contacts are added
  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  // This will be used when new Contacts are removed
  const removeContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }

  // This useEffect will only be called on Contact changes (REMOVE or ADD).
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // This useEffect will only be called on theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
   <Container className={theme === 'light'? 'body-light': 'body-dark'} fluid>
     <h1 className='head-text'>Humare Sampark</h1>
     <Button color={theme === 'light'? 'primary' : 'secondary'} onClick={() => setTheme(theme === 'light'? 'dark' : 'light')}>{theme === 'light'? 'Toggle Dark' : 'Toggle Light'} </Button>
     <Contacts contacts={contacts} theme={theme} removeContact={removeContact} />
     <AddContact theme={theme} addContact={addContact} />
   </Container> 
  );
};

export default App;