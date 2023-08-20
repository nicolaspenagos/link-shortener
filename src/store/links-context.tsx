import { useEffect, useState } from "react";
import { ref, onValue, set } from "firebase/database";
import { database } from "../api/config";
import uuid from "react-uuid";
import { createContext } from "react";

type LinksObj = {
  links: string[];
  addLink: (longLink: string, shortLink: string) => void;
};

type LinkObj = {
  id: string;
  shortLink: string;
  longLink: string;
};

export const LinksContext = createContext<LinksObj>({
  links: [],
  addLink: (longLink, shortLink) => {},
});

const LinksContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [links, setLinks] = useState<string[]>([]);

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
    } catch (error) {
      console.error("Error writing link to the database", error);
    }
  };
  return (
    <LinksContext.Provider value={{ links, addLink }}>
      {children}
    </LinksContext.Provider>
  );
};

export default LinksContextProvider;
