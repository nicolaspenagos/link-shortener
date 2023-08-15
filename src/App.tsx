import Card from './components/UI/Card';
import classes from './App.module.css';
import Header from "./components/Layout/Header";
import Title from "./components/Layout/Title";
import LinkShortener from "./components/LinkShortener/LinkShortener";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <>
      <Header />
      <main className={classes.main}>
        <section data-aos="fade-down" data-aos-duration="1000">
          <Title />
          <LinkShortener />
        </section>
      </main>
    </>
  );
}

export default App;
