import React from 'react';
import AppTemplate from './AppTemplate';
import ContactContainer from './components/Contact/ContactContainer'
import ContactDetailContainer from './components/ContactDetail/ContactDetailContainer'

function App() {
  return (
    <AppTemplate
      contact={<ContactContainer />}
      contactDetail={<ContactDetailContainer />}
    />
  );
}

export default App;
