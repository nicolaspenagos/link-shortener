import classes from './App.module.css';
import Header from "./components/Layout/Header";
import Title from "./components/Layout/Title";
import LinkShortener from "./components/LinkShortener/LinkShortener";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import LinksContextProvider from './store/links-context';



function App() {

  useEffect(() => {

    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <LinksContextProvider>
      <Header />
      <main className={classes.main}>
        <section data-aos="fade-down" data-aos-duration="1000" className={classes.content}>
          <Title />
          <LinkShortener />
        </section>
      </main>
    </LinksContextProvider>
  );
}

export default App;
