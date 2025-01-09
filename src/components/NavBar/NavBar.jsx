import { Link } from 'react-router'

const NavBar = () => {
    return (
        <nav>
            <Link className='nav-link' to="/">Home</Link>
            <Link to="/mailboxes">Mailboxes</Link>
            <Link to="/new-mailbox">New Mailbox</Link>
        </nav>
    )
}

export default NavBar