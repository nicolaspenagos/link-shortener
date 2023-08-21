import classes from "./App.module.css";
import Header from "./components/Layout/Header";
import Title from "./components/Layout/Title";
import LinkShortener from "./components/LinkShortener/LinkShortener";
import { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LinkContainer from "./components/LinkShortener/LinkContainer";
import { LinksContext } from "./store/links-context";

function App() {
  const linksCtx = useContext(LinksContext);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  console.log(linksCtx.latestShortenedLink);
  return (
    <>
      <Header />
      <main className={classes.main}>
        <section
          data-aos="fade-down"
          data-aos-duration="1000"
          className={classes.content}
        >
          <Title />
          <LinkShortener />

          {linksCtx.latestShortenedLink && (
            <LinkContainer
              link={linksCtx.latestShortenedLink}
    
            />
          )}
        </section>
      </main>
    </>
  );
}

export default App;
