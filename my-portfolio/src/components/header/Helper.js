import CV from '../../assets/cv.pdf';
function Helper() {
    return (
        <div className="helper">
            <a href={CV} download className="btn">Download CV</a>
            <a href="#contacts" className="btn btn-primary">Let`s Talk</a>
        </div>
    )
}

export default Helper;