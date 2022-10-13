import './portfolio.css';
import forum from '../../assets/forum.png';
import automarket from '../../assets/automarket.png';
import bookshelf from '../../assets/bookshelf.png';
import quiz from '../../assets/quiz.png';
import portfolio from '../../assets/portfolio.png';

function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>
                My Recent Work
            </h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>

                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={automarket} alt='automarket project image'></img>
                    </div>
                    <h3>Car Trading Platform</h3>
                    <a href='https://github.com/BlagoKolev/AutoMarket' className='btn' target='_blank'>View on Github</a>
                </article>

                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={forum} alt='forum project image'></img>
                    </div>
                    <h3>Forum System</h3>
                    <a href='https://github.com/BlagoKolev/MyForumSystem' className='btn' target='_blank'>View on Github</a>
                </article>

                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={bookshelf} alt='bookshelf project image'></img>
                    </div>
                    <h3>Books Sharing Platform</h3>
                    <a href=' https://github.com/BlagoKolev/Bookshelf' className='btn' target='_blank'>View on Github</a>
                </article>
               
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={quiz} alt='quiz project image'></img>
                    </div>
                    <h3>Quiz Game</h3>
                    <a href='https://github.com/BlagoKolev/Quiz-Books-and-Authors' className='btn' target='_blank'>View on Github</a>
                </article>

                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={portfolio} alt='quiz project image'></img>
                    </div>
                    <h3>My Personal Website</h3>
                    <a href='https://github.com/BlagoKolev/MyPortfolio' className='btn' target='_blank'>View on Github</a>
                </article>

            </div>
        </section>
    )
}

export default Portfolio;