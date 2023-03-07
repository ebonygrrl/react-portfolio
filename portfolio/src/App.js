import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Work from './components/pages/Work';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import './components/styles/style.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
    <Header />
    <main>
    <About />
    <Work />
    <Contact />
    </main>
    <Footer />
    </>
  );
}

export default App;
