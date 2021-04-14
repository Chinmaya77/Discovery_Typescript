import "./App.css";

import Header from "./components/organisms/header/Header";
import Corousel from "./components/organisms/corousel/Corousel";

import Category from "./components/organisms/category/Category";

function App() {
  const carouselData = [
    {
      textContentHeader: "Mission Frontline",
      textContentSubHeader:
        "Superstar Rana Daggubati spends time with India's finest of the Border Security Force at an outpost in Jaisalmer, Rajasthan in this discovery+ original.",
      tag1: "Must Try",
      tag2: "Trending",
      image: "mission.jpeg",
    },
    {
      textContentHeader: "Secrets Of Sinauli",
      textContentSubHeader:
        "Uncover Indian secrets buried for over 4000 years in this historical thriller that follows one of the greatest finds of the century. Neeraj Pandey's Secrets Of Sinauli is a discovery+ India original, presented by Manoj Bajpayee.",
      tag1: "New",
      tag2: "Don't Miss",
      image: "secrets.jpeg",
    },
    {
      textContentHeader: "Gold Rush",
      textContentSubHeader:
        "Hard-working gold miners risk their lives for a chance at striking it rich.",
      tag1: "Binge Now",
      tag2: "Fan Fave",
      image: "gold-rush.jpeg",
    },
    {
      textContentHeader: "2 Nations 1 Obsession",
      textContentSubHeader:
        "The rivalry between the Australian and Indian cricket teams is explored.",
      tag1: "Must Try",
      tag2: "Trending",
      image: "two-nations.jpeg",
    },
  ];

  const categoryData = [
    {
      image: "adventures.jpg",
      text: "Adventures",
    },
    {
      image: "animals.jpg",
      text: "Animals",
    },
    {
      image: "nature.jpg",
      text: "Nature",
    },
    {
      image: "auto.jpg",
      text: "Auto",
    },
    {
      image: "food.jpg",
      text: "Food",
    },
    {
      image: "lifestyle.jpg",
      text: "Lifestyle",
    },
  ];

  const linkData = ["Home", "Explore", "Shorts", "MindBlown", "Premium"];

  return (
    <div className="App">
      <Header linkData={linkData}></Header>
      <Corousel corouselData={carouselData}></Corousel>

      <Category categoryData={categoryData}></Category>
    </div>
  );
}

export default App;
