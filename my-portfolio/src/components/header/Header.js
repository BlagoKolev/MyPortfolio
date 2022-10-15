import './header.css';
import HeaderButtons from './HeaderButtons';
import HeaderSocials from './HeaderSocials';
import me from '../../assets/me.jpg'

function Header() {

    return (<header>
        <div className="container header__container">
            <h5>Hello I`m</h5>
            <h1>Blagovest Kolev</h1>
            <h5 className='text-light'>Junior Full Stack C# .Net Developer</h5>

            <HeaderButtons />
            <HeaderSocials/>
            
            <div className='me'>
                <img src={me} alt='my picture'></img>
            </div>

            <a href='#contacts' className='scroll__down'>Scroll Down</a>
            
        </div>
    </header>)
}

export default Header;