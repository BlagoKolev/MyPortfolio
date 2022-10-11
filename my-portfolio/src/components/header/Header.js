import style from './Header.module.css';
import Helper from './Helper';

function Header() {

    return (<header>
        <div className="container header__container">
            <h5>Hello I`m</h5>
            <h1>Blagovest Kolev</h1>
            <h5 className='text-light'>Junior Fullstack Developer</h5>
            <Helper />
        </div>
    </header>)
}

export default Header;