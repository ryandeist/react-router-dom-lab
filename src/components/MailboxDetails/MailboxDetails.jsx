import { Link, useParams } from 'react-router';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();

    const viewedMailbox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ));

    return (
        <main>
            {!viewedMailbox ? <h1>Mailbox Not Found</h1> : <>
                <h1>Mailbox {mailboxId}</h1>
                <dl>
                    <h2>Name:</h2>
                    <p>{viewedMailbox.boxOwner}</p>
                    <h2>Size:</h2>
                    <p>{viewedMailbox.boxSize}</p>
                </dl>
            </>}
            <Link to="/mailboxes">Back to Mailboxes</Link>
        </main>
    )
}

export default MailboxDetails