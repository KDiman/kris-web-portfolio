import { createContext, useState } from "react";
import javaGameThumbnail from "../assets/thumbnail/javeGameThumbnail.jpg";
import sadieThumbnail from "../assets/thumbnail/sadieOnlineShopThumbnail.jpg";
import brandedThumbnail from "../assets/thumbnail/brandedThumbnail.jpg";
import pokeDexThumbnail from "../assets/thumbnail/PokedexReact.jpg"
import firstProject from "../assets/thumbnail/1stPortfolio.jpg"

const ProjContext = createContext();

const ProjProvider = (props) => {
  const [proj, setProj] = useState([
    {
      id: 1,
      thumbnail: javaGameThumbnail,
      title: "Defend the Throne",
      description:
        "Defend the throne is a 2D scrolling game. The goal of the game is to defend the throne as long as possible. The game was coded with vanilla JavaScript.",
      link: "https://project-java-game.vercel.app/",
    },
    {
      id: 2,
      thumbnail: sadieThumbnail,
      title: "Sadie Online Shop",
      description: "This is an e-commerce front end created with React.",
      link: "https://sadieonlineshop.vercel.app/",
    },
    {
      id: 3,
      thumbnail: brandedThumbnail,
      title: "Branded",
      description:
        "This is an e-commerce project that targets to create a website for users which they can use to create their gallery.",
      link: "https://brandedapp.vercel.app/",
    },
    {
      id: 4,
      thumbnail: pokeDexThumbnail,
      title: "React Pokedex",
      description:
        "One of our homework where we are required to create our own Pokedex using PokeApi with React.",
      link: "https://poke-dex-hw-64lk.vercel.app/",
    },
    {
      id: 5,
      thumbnail: firstProject,
      title: "1st Web Portfolio Project",
      description:
        "This is our first project where are required to use HTML and CSS only for this project",
      link: "https://1stproj-pi.vercel.app/",
    },
  ]);

  return (
    <ProjContext.Provider value={[proj, setProj]}>
      {props.children}
    </ProjContext.Provider>
  );
};

export { ProjProvider, ProjContext };
