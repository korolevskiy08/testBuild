import { FC } from "react";

import { DescriptionLayout } from "./features/DescriptionLayout/DescriptionLayout";
import { Footer } from "./features/Footer/Footer";
import { Header } from "./features/Header/Header";
import { Item } from "./features/Item/Item";
import { NavBar } from "./features/NavBar/NavBar";
import { Search } from "./features/Search/Search";
import { Slider } from "./features/Slider/Slider";
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <div className="backgroundImg">
        <Item />
        <DescriptionLayout />
      </div>
      <Slider />
      <Search />
      <Footer />
    </div>
  );
};

export default App;
