import './nav.css';
import { AiOutlineHome, AiOutlineUser, AiOutlinePhone } from 'react-icons/ai';
import { MdLaptopChromebook } from 'react-icons/md';


function Nav() {
    return (<nav>
        <a href='#'><AiOutlineHome /></a>
        <a href='#about'><AiOutlineUser /></a>
        <a href='#experience'><MdLaptopChromebook /></a>
        <a href='#contacts'><AiOutlinePhone /></a>
    </nav>)
}

export default Nav;