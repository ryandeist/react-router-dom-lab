import './App.css';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import { Route, Routes } from 'react-router';
import { useState } from 'react';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  }

  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<main><h1>Post Office</h1></main>} />
          <Route path="/mailboxes" element={<MailboxList />} /> 
          <Route path="/new-mailbox" element={<MailboxForm />} /> 
          <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} /> 
          <Route path="*" element={<main><h1>Not Found</h1></main>} />
        </Routes>
      </main>
    </>
  )
};

export default App;
