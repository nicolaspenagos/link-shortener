import { useEffect, useState } from "react";
import { ref, onValue, set } from "firebase/database";
import { database } from "../api/config";
import uuid from "react-uuid";
import { createContext } from "react";
import { url } from "../components/LinkShortener/LinkShortener";

type LinksObj = {
  links: string[];
  addLink: (longLink: string, shortLink: string) => Promise<string | undefined>;
  latestShortenedLink: string | null;
};

type LinkObj = {
  id: string;
  shortLink: string;
  longLink: string;
};

export const LinksContext = createContext<LinksObj>({
  links: [],
  addLink: async (longLink, shortLink) => "",
  latestShortenedLink: null,
});

const LinksContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [links, setLinks] = useState<string[]>([]);
  const [latestShortenedLink, setLatestShortenedLink] = useState<string | null>(
    null
  );

  useEffect(() => {
    const unsubscribe = onValue(ref(database, "links"), (snapshot) => {
      const bigLinksJson: Record<string, LinkObj> = snapshot.val();
      const shortLinks = Object.values(bigLinksJson).map(
        (linkObj) => linkObj.shortLink
      );
      setLinks(shortLinks);
    });
    return () => unsubscribe();
  }, []);

  const addLink = async (longLink: string, shortLink: string) => {
    try {
      const id = uuid();
      await set(ref(database, "links/" + id), {
        id,
        longLink,
        shortLink,
      });
      const shortenedLink = url + shortLink;
      setLatestShortenedLink(shortLink);
      return shortenedLink;
    } catch (error) {
      throw new Error("Error creating the shortenedlink");
    }
  };
  return (
    <LinksContext.Provider value={{ links, addLink, latestShortenedLink }}>
      {children}
    </LinksContext.Provider>
  );
};

export default LinksContextProvider;
