import { Link, useParams } from 'react-router';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();

    const viewedMailbox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ));

    return (
        <main>
            <h1>Mailbox {mailboxId}</h1>
            <dl>
                <h2>Name:</h2>
                <p>{viewedMailbox.name}</p>
                <h2>Size:</h2>
                <p>{viewedMailbox.size}</p>
            </dl>
            <Link to="/mailboxes">Back to Mailboxes</Link>
        </main>
    )
}

export default MailboxDetails