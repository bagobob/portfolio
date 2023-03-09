import './App.css';
import About from './components/about/About';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Work from './components/work/Work';
import Certifications from './components/certifications/Certifications';



function App() {
  
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Certifications />
        <Contact />
        
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
