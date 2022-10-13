import './about.css';
import me2 from '../../assets/me2.jpg';
import { FaAward } from 'react-icons/fa';
import { AiFillFolderOpen } from 'react-icons/ai';

function About() {
    return (<section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>
            <div className='about__me'>
                <div className='about__me-image'>
                    <img src={me2} alt='my pic' />
                </div>
            </div>
            <div className='about__content'>
                <div className='about__cards'>
                    <article className='about__card'>
                        <FaAward className='about__icon' />
                        <h5>Experience</h5>
                        <small>2 years of Learning and Practicing</small>
                    </article>

                    <article className='about__card'>
                        <AiFillFolderOpen className='about__icon' />
                        <h5>Projects</h5>
                        <small>5 Personal Projects</small>
                    </article>
                </div>
                <p>Hi there! I am Blagovest and i love Programming. I`m hardworking, loving to learn new things and accepting new challenges. I have been working as a mechanical engineer for 10 years now and I can't wait to enter the magical world of programming.
                    To learn more about my career path, please download and view my CV.</p>
                <p>Happy hacking!</p>
                <a href='#contacts' className='btn btn-primary'>Let`s Talk</a>
            </div>
        </div>
    </section>
    )
}

export default About;