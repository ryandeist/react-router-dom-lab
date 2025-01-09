import { Link } from 'react-router';

const MailboxList = () => {
    return (
        <main>
            <h1>Mailboxes</h1>
            <Link to="/new-mailbox">New Mailbox</Link>
        </main>
    )
}

export default MailboxList;