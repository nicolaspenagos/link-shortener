import React from "react";
import classes from "./Root.module.css";
import Title from "./../Layout/Title";
import LinkShortener from "./../LinkShortener/LinkShortener";
import { useContext } from "react";
import LinkContainer from "./../LinkShortener/LinkContainer";
import { LinksContext } from "./../../store/links-context";

const RootLayout: React.FC = () => {
  const linksCtx = useContext(LinksContext);

  return (
    <>
      <main className={classes.main}>
        <section
          data-aos="fade-down"
          data-aos-duration="1000"
          className={classes.content}
        >
          <Title />
          <LinkShortener />

          {linksCtx.latestShortenedLink && (
            <LinkContainer link={linksCtx.latestShortenedLink} />
          )}
        </section>
      </main>
    </>
  );
};

export default RootLayout;
