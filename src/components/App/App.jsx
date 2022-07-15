import { AppContainer } from './App.styled';
import { GlobalStyle } from '../GlobalStyle';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

const App = () => {

  return (
    <AppContainer>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </AppContainer>
  );
};

export default App;