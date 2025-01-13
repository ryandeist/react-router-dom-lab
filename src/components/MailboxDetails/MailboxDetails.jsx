import { Link, useParams } from 'react-router';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();

    const viewedMailbox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ));

    const selectedLetters = props.letters.filter((letter) => (
        Number(letter.mailboxId) === Number(mailboxId)
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
                    <h2>Letters</h2>
                    <ul>
                        {selectedLetters.map((letter) => (
                            <li key={letter._id}>
                                <h3>Recipient:</h3>
                                <p>{letter.recipient}</p>
                                <h3>Message:</h3>
                                <p>{letter.message}</p>
                            </li>
                        ))}
                    </ul>
                </dl>
            </>}
            <Link to="/mailboxes">Back to Mailboxes</Link>
        </main>
    )
}

export default MailboxDetails