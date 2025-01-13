import './App.css';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import LetterForm from './components/LetterForm/LetterForm';
import { Route, Routes } from 'react-router';
import { useState } from 'react';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addLetter = (newLetterData) => {
    newLetterData._id = letters.length + 1;
    setLetters([...letters, newLetterData]);
  }

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  }

  console.log(letters)

  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<main><h1>Post Office</h1></main>} />
          <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} /> 
          <Route path="/new-mailbox" element={<MailboxForm addMailbox={addMailbox} />} /> 
          <Route path="/new-letter" element={<LetterForm addLetter={addLetter} mailboxes={mailboxes} />} />
          <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} /> 
          <Route path="*" element={<main><h1>Mailbox Not Found</h1></main>} />
        </Routes>
      </main>
    </>
  )
};

export default App;
