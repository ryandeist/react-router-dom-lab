import { useState } from 'react'
import { useNavigate } from 'react-router'

const initState = {
    boxOwner: '',
    boxSize: 'small'
};

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initState);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addMailbox(formData);
        setFormData(initState);
        navigate('/mailboxes');
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    return (
        <>
            <h1>Add Mailbox</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxOwner">Box Owner:</label>
                <input
                    type="text"
                    name='boxOwner'
                    id='boxOwner'
                    value={formData.boxOwner}
                    onChange={handleChange}
                />
                <label htmlFor="boxSize">Box Size:</label>
                <select name='boxSize' id='boxSize' value={formData.boxSize} onChange={handleChange}>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
                <button type='submit'>Add Mailbox</button>
            </form>
        </>
    )
}

export default MailboxForm