import CV from '../../assets/cv.pdf';

function HeaderButtons() {
    return (
        <div className="header__buttons">
            <a href={CV} download className="btn">Download CV</a>
            <a href="#contacts" className="btn btn-primary">Let`s Talk</a>
        </div>
    )
}

export default HeaderButtons;