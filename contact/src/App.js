import React from 'react';
import AppTemplate from './AppTemplate';
import Contact from './components/Contact'
import ContactDetail from './components/ContactDetail'
function App() {
  return (
    <AppTemplate
      contact={<Contact />}
    // contactDetail={<ContactDetail />}
    />
  );
}

export default App;
