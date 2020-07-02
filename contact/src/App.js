import React from 'react';
import AppTemplate from './AppTemplate';
import ContactContainer from './containers/ContactContainer'
import ContactDetailContainer from './containers/ContactDetailContainer'

function App() {
  return (
    <AppTemplate
      contact={<ContactContainer />}
      contactDetail={<ContactDetailContainer />}
    />
  );
}

export default App;
