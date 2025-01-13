import { useState } from 'react';
import { useNavigate } from 'react-router';

const initState = {
    mailboxId: 1,
    recipient: '',
    message: '',
};

const LetterForm = (props) => {
    const [formData, setFormData] = useState(initState);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addLetter(formData);
        setFormData(initState);
        navigate(`/mailboxes/${formData.mailboxId}`);
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    return (
        <>
            <h1>Send a Letter</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="mailboxId">Letter Recipient:</label>
                <select name='mailboxId' id='mailboxId' value={formData.mailboxId} onChange={handleChange}>
                    {props.mailboxes.map((mailbox) => (
                        <option key={mailbox._id} value={mailbox._id}>Mailbox {mailbox._id}</option>
                    ))}
                </select>
                <label htmlFor="recipient">Recipient:</label>
                <input
                    type="text"
                    name='recipient'
                    id='recipient'
                    value={formData.recipient}
                    onChange={handleChange}
                />
                <label htmlFor="message">Message:</label>
                <textarea
                    name='message'
                    id='message'
                    value={formData.message}
                    onChange={handleChange}
                />
                <button type='submit'>Add Mailbox</button>
            </form>
        </>
    )
};

export default LetterForm;