//import './App.css';
import Header from './components/header/Header';
import About from './components/about/About.js';
import Contacts from './components/contacts/Contacts';
import Experience from './components/experience/Experience';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    //<div className="App">
      <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contacts />
        <Footer />
      </>
   // </div>
  );
}

export default App;
