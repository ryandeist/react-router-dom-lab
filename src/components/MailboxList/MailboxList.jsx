import { Link } from 'react-router';

const MailboxList = (props) => {
    return (
        <main>
            <h1>Mailboxes</h1>
            <ul>
                {props.mailboxes.map((mailbox) => (
                    <li key={mailbox._id} className='mail-box'>
                        <Link to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/new-mailbox">New Mailbox</Link>
        </main>
    )
}

export default MailboxList;