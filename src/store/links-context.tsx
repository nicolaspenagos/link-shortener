import { useEffect, useState } from "react";
import { ref, onValue, set } from "firebase/database";
import { database } from "../api/config";
import uuid from "react-uuid";
import { createContext } from "react";
import { url } from "../components/LinkShortener/LinkShortener";

type LinksObj = {
  addLink: (longLink: string, shortLink: string) => Promise<string | undefined>;
  latestShortenedLink: string | null;
  mappedLinks: Map<string, string>;
};

type LinkObj = {
  id: string;
  shortLink: string;
  longLink: string;
};

export const LinksContext = createContext<LinksObj>({
  addLink: async (longLink, shortLink) => "",
  latestShortenedLink: null,
  mappedLinks: new Map<string, string>(),
});

const LinksContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [mappedLinks, setMappedLinks] = useState<Map<string, string>>(
    new Map()
  );
  const [links, setLinks] = useState<string[]>([]);
  const [latestShortenedLink, setLatestShortenedLink] = useState<string | null>(
    null
  );

  useEffect(() => {
    const unsubscribe = onValue(ref(database, "links"), (snapshot) => {
      if (snapshot.val()) {
        const bigLinksJson: Record<string, LinkObj> = snapshot.val();
        const values = Object.values(bigLinksJson);

        const map = new Map();

        for (const key in bigLinksJson) {
          const val = bigLinksJson[key];
          map.set(val.shortLink, val.longLink);
        }

        const shortLinks = values.map((linkObj) => linkObj.shortLink);

        setMappedLinks(map);
        setLinks(shortLinks);
      }
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
      setLatestShortenedLink(shortenedLink);
      return shortenedLink;
    } catch (error) {
      throw new Error("Error creating the shortenedlink");
    }
  };
  return (
    <LinksContext.Provider
      value={{ addLink, latestShortenedLink, mappedLinks }}
    >
      {children}
    </LinksContext.Provider>
  );
};

export default LinksContextProvider;
