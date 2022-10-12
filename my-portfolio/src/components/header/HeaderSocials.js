import { BsGithub, BsLinkedin } from 'react-icons/bs';

function HeaderSocials() {
    return (
        <div className="header__socials">
            <a href="https://github.com/BlagoKolev" target="_blank"><BsGithub /></a>
            <a href="https://www.linkedin.com/in/blagovest-kolev-0021b3229/" target="_blank"><BsLinkedin /></a>
        </div>
    )
}

export default HeaderSocials;