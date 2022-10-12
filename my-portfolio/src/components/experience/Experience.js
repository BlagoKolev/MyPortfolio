import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

function Experience() {
    return <section id='experience'>
        <h5>The Skills I Have</h5>
        <h2>My Experience</h2>
        <div className='container experience__container'>
            <div className='experience__frontend'>
                <h3>Frontend Development</h3>
                <div className='experience__content'>
                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Practitioner</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                            <h4>CSS</h4>
                            <small className='text-light'>Practitioner</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                            <h4>JavaScript</h4>
                            <small className='text-light'>Practitioner</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                            <h4>React</h4>
                            <small className='text-light'>Practitioner</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                            <h4>Bootstrap</h4>
                            <small className='text-light'>Practitioner</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                            <h4>Material UI</h4>
                            <small className='text-light'>Practitioner</small>
                        </div>
                    </article>

                </div>
            </div>

            <div className='experience__backend'>
                <h3>Backend Development</h3>
                <div className='experience__content'>

                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                            <h4>C#</h4>
                            <small className='text-light'>Practitioner</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                            <h4>Asp.NET</h4>
                            <small className='text-light'>Practitioner</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                            <h4>EntityFramework Core</h4>
                            <small className='text-light'>Practitioner</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                            <h4>MS SQL</h4>
                            <small className='text-light'>Practitioner</small>
                        </div>
                    </article>

                </div>
            </div>
        </div>
    </section>
}

export default Experience;