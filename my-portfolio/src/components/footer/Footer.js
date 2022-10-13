import './footer.css';
import { BsGithub, BsLinkedin,BsFacebook } from 'react-icons/bs';

function Footer() {
    return (<footer>
        <a href='#' className='footer__logo'>Blagovest Kolev</a>

        <ul className='permalinks'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#contacts'>Contacts</a></li>
        </ul>

        <div className='footer__socials'>
            <a href='https://github.com/BlagoKolev' target='_blank'><BsGithub /></a>
            <a href='https://www.linkedin.com/in/blagovest-kolev-0021b3229/' target='_blank'><BsLinkedin /></a>
            <a href='https://www.facebook.com/blagovest.kolev.7' target='_blank'><BsFacebook/></a>
        </div>

        <div className='footer_copyright'>
            <small>&copy; Blagovest Kolev Portfolio. All rights reserved.</small>
        </div>
    </footer>)
}

export default Footer;